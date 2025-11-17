import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertContactSubmission) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setIsSubmitted(true);
      setSubmitError(null);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      setSubmitError(errorMessage);
      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    setSubmitError(null);
    setIsSubmitted(false);
    mutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-3 tracking-tight">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
            Ready to start your project? Share a few details and we&apos;ll
            reach out to plan the next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 md:gap-10">
          {/* Form */}
          <Card className="rounded-3xl border border-[#18181b] bg-[#020617]/95 shadow-[0_22px_70px_rgba(0,0,0,0.85)]">
            <div className="p-6 md:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">Name</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#020617] border-[#27272f] text-slate-50 placeholder:text-slate-500 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60"
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="bg-[#020617] border-[#27272f] text-slate-50 placeholder:text-slate-500 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Project Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="bg-[#020617] border-[#27272f] text-slate-50 focus:border-[#7C3AED]"
                              data-testid="select-project-type"
                            >
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#020617] border-[#27272f]">
                            <SelectItem value="web-development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="ui-ux-design">
                              UI/UX Design
                            </SelectItem>
                            <SelectItem value="e-commerce">
                              E-commerce
                            </SelectItem>
                            <SelectItem value="mobile-app">
                              Mobile App
                            </SelectItem>
                            <SelectItem value="branding">
                              Branding
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-32 resize-none bg-[#020617] border-[#27272f] text-slate-50 placeholder:text-slate-500 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {mutation.isPending && (
                    <Alert
                      className="bg-violet-500/10 border-violet-500/40"
                      data-testid="alert-loading"
                    >
                      <Loader2 className="h-4 w-4 animate-spin text-violet-300" />
                      <AlertDescription className="text-slate-100">
                        Sending your message...
                      </AlertDescription>
                    </Alert>
                  )}

                  {isSubmitted && !mutation.isPending && (
                    <Alert
                      className="bg-emerald-500/10 border-emerald-500/40"
                      data-testid="alert-success"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      <AlertDescription className="text-slate-100">
                        Message sent successfully! We&apos;ll get back to you
                        within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitError && !mutation.isPending && (
                    <Alert
                      variant="destructive"
                      data-testid="alert-error"
                      className="border-red-500/40 bg-red-900/40"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{submitError}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium"
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </Card>

          {/* Contact info panel + hours */}
          <div className="space-y-6">
            <Card className="rounded-3xl border border-[#27272f] bg-gradient-to-br from-[#111827] via-[#020617] to-[#020617] p-6 md:p-7">
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-5">
                Contact Information
              </h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/20 text-[#C4B5FD]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a
                      href="mailto:hello@webdesigno.com"
                      className="text-slate-400 hover:text-slate-100 transition-colors"
                      data-testid="link-email"
                    >
                      hello@webdesigno.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/20 text-[#C4B5FD]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <a
                      href="tel:+1234567890"
                      className="text-slate-400 hover:text-slate-100 transition-colors"
                      data-testid="link-phone"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/20 text-[#C4B5FD]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Office</div>
                    <p className="text-slate-400">
                      123 Design Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-[#27272f] bg-[#020617]/95 p-6 space-y-5">
              <div>
                <h4 className="font-medium mb-2 text-sm md:text-base">
                  Office Hours
                </h4>
                <p className="text-xs md:text-sm text-slate-400">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM PST
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div className="border-t border-[#27272f] pt-4">
                <h4 className="font-medium mb-3 text-sm md:text-base">
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                  {["LinkedIn", "Twitter", "Instagram", "Dribbble"].map(
                    (social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-slate-400 hover:text-slate-100 transition-colors"
                        data-testid={`link-social-${social.toLowerCase()}`}
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}