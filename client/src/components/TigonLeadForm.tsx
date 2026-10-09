import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { vehicles } from "@/data/vehicles";
import {
  DEFAULT_FORM_NAME,
  HONEYPOT_FIELD,
  LeadError,
  LeadErrors,
  buildLeadData,
  sendLead,
  validateLead,
} from "@/lib/tigonLead";

export interface LeadVehicle {
  brand: string;
  model: string;
  vin?: string;
  sku?: string;
}

interface TigonLeadFormProps {
  /** Sent as form_name. TIGON expects "Contact form" for this webhook. */
  formName?: string;
  /** When set (product pages), brand/model are shown read-only and VIN/SKU are sent hidden. */
  vehicle?: LeadVehicle;
  idPrefix?: string;
  submitLabel?: string;
  messagePlaceholder?: string;
  defaultComments?: string;
  onSuccess?: () => void;
}

const SUCCESS_TEXT = "Thank you! We received your message and will contact you shortly.";
const BRANDS = ["DENAGO", "EVOLUTION", "TIGON", "Other"];
const MODEL_OPTIONS = Array.from(new Set(vehicles.map((v) => v.name)));

export default function TigonLeadForm({
  formName = DEFAULT_FORM_NAME,
  vehicle,
  idPrefix = "lead",
  submitLabel = "Send Message",
  messagePlaceholder = "Tell us about your needs...",
  defaultComments = "",
  onSuccess,
}: TigonLeadFormProps) {
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const id = (name: string) => `${idPrefix}-${name}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    const fd = buildLeadData(form, formName);
    const found = validateLead(fd);
    setErrors(found);
    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      setStatus({ ok: false, text: "Please fix the highlighted fields." });
      form.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setStatus({ ok: true, text: "Sending…" });
    try {
      await sendLead(fd);
      form.reset();
      setErrors({});
      setStatus({ ok: true, text: SUCCESS_TEXT });
      onSuccess?.();
    } catch (err) {
      setStatus({
        ok: false,
        text: err instanceof LeadError ? err.message : "Sorry, something went wrong. Please try again or call 1-844-844-6638.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (
    name: string,
    label: string,
    input: JSX.Element,
    className?: string
  ) => (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id(name)} className={errors[name] ? "text-destructive" : undefined}>
        {label}
      </Label>
      {input}
      {errors[name] && (
        <p id={id(`${name}-error`)} className="text-sm font-medium text-destructive">
          {errors[name]}
        </p>
      )}
    </div>
  );

  const aria = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
  });

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm";

  return (
    <form onSubmit={handleSubmit} noValidate encType="multipart/form-data" className="space-y-4 relative">
      <div className="grid md:grid-cols-2 gap-4">
        {field("first_name", "First Name *",
          <Input id={id("first_name")} name="first_name" autoComplete="given-name" placeholder="John" required {...aria("first_name")} />)}
        {field("last_name", "Last Name *",
          <Input id={id("last_name")} name="last_name" autoComplete="family-name" placeholder="Doe" required {...aria("last_name")} />)}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {field("email", "Email *",
          <Input id={id("email")} name="email" type="email" autoComplete="email" placeholder="john@example.com" required {...aria("email")} />)}
        {field("phone1", "Phone *",
          <Input id={id("phone1")} name="phone1" type="tel" autoComplete="tel" placeholder="(555) 123-4567" required {...aria("phone1")} />)}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {field("phone2", "Alternate phone",
          <Input id={id("phone2")} name="phone2" type="tel" placeholder="Optional" {...aria("phone2")} />)}
        {field("zip_code", "ZIP code",
          <Input id={id("zip_code")} name="zip_code" inputMode="numeric" autoComplete="postal-code" placeholder="19971" />)}
      </div>

      {field("address", "Address",
        <Input id={id("address")} name="address" autoComplete="street-address" placeholder="Street, City, State" />)}

      {vehicle ? (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {field("brand", "Brand",
              <Input id={id("brand")} name="brand" value={vehicle.brand} readOnly className="bg-gray-100" />)}
            {field("model", "Model",
              <Input id={id("model")} name="model" value={vehicle.model} readOnly className="bg-gray-100" />)}
          </div>
          <input type="hidden" name="vin_number" value={vehicle.vin || ""} />
          <input type="hidden" name="sku_number" value={vehicle.sku || ""} />
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {field("brand", "Brand",
              <select id={id("brand")} name="brand" defaultValue="" className={selectClass}>
                <option value="">Select a brand</option>
                {BRANDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>)}
            {field("model", "Model you are interested in",
              <>
                <Input id={id("model")} name="model" list={id("model-options")} placeholder="e.g. DENAGO® EV NOMAD" />
                <datalist id={id("model-options")}>
                  {MODEL_OPTIONS.map((m) => (
                    <option key={m} value={m} />
                  ))}
                </datalist>
              </>)}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {field("vin_number", "VIN (optional)",
              <Input id={id("vin_number")} name="vin_number" placeholder="Optional" />)}
            {field("sku_number", "Stock # / SKU (optional)",
              <Input id={id("sku_number")} name="sku_number" placeholder="Optional" />)}
          </div>
        </>
      )}

      {field("comments", "Message",
        <Textarea id={id("comments")} name="comments" placeholder={messagePlaceholder} defaultValue={defaultComments} className="min-h-[120px]" />)}

      <div className="grid md:grid-cols-3 gap-4">
        {["image_1", "image_2", "image_3"].map((name, i) =>
          <div key={name}>
            {field(name, `Photo ${i + 1} (optional)`,
              <Input
                id={id(name)}
                name={name}
                type="file"
                accept="image/*,.heic,.heif"
                className="cursor-pointer"
                {...aria(name)}
              />)}
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500">Photos: JPG, PNG, GIF, WEBP or HEIC, up to 10 MB each.</p>

      {/* Spam trap: real visitors never see this. It must be sent empty. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={id("hp")}>Leave this field empty</label>
        <input type="text" id={id("hp")} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {/* Filled in right before sending (see lib/tigonLead.ts) */}
      <input type="hidden" name="form_name" value={formName} />
      <input type="hidden" name="url" defaultValue="" />
      <input type="hidden" name="referrer" defaultValue="" />
      <input type="hidden" name="utm_source" defaultValue="" />
      <input type="hidden" name="utm_medium" defaultValue="" />
      <input type="hidden" name="utm_campaign" defaultValue="" />
      <input type="hidden" name="utm_term" defaultValue="" />
      <input type="hidden" name="utm_content" defaultValue="" />
      <input type="hidden" name="gclid" defaultValue="" />
      <input type="hidden" name="fbclid" defaultValue="" />
      <input type="hidden" name="ga_client_id" defaultValue="" />

      <Button
        type="submit"
        className="w-full bg-theme-orange hover:bg-orange-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>

      <p
        role="status"
        aria-live="polite"
        className={cn("text-sm font-semibold min-h-[1.25rem]", status?.ok ? "text-green-700" : "text-destructive")}
      >
        {status?.text}
      </p>
    </form>
  );
}
