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
} from "@/schemas/contact";
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

  // Fake mutation: keeps loading/success UI but does NOT send anything anywhere
  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      // simulate a short network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return data;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setSubmitError(null);
      toast({
        title: "Message sent successfully!",
        description:
          "This is a demo UI only. Your message is not actually being sent anywhere.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: () => {
      const errorMessage =
        "Something went wrong (demo mode). Please try again or contact us directly.";
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
                            className="bg-[#020617] border-[#27272f] text-slate-50 placeholder:text-slate-500 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60"
                            placeholder="you@example.com"
                            type="email"
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
                              className="bg-[#020617] border-[#27272f] text-slate-50 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60"
                              data-testid="select-project-type"
                            >
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#020617] border-[#27272f] text-slate-50">
                            <SelectItem value="web_design">
                              Web Design
                            </SelectItem>
                            <SelectItem value="web_app">
                              Web Application
                            </SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                            <SelectItem value="ui_ux">UI/UX Design</SelectItem>
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
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-[#020617] border-[#27272f] text-slate-50 placeholder:text-slate-500 focus:border-[#7C3AED] focus:ring-[#7C3AED]/60 min-h-[140px]"
                            placeholder="Tell us about your project, timeline, and goals..."
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-3 pt-2">
                    <Button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-5 rounded-2xl text-sm md:text-base shadow-[0_18px_40px_rgba(124,58,237,0.45)]"
                      disabled={mutation.isPending}
                      data-testid="btn-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending message...
                        </>
                      ) : (
                        <>Send message</>
                      )}
                    </Button>

                    {isSubmitted && !submitError && (
                      <Alert
                        variant="default"
                        className="border-emerald-500/40 bg-emerald-900/40"
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
                  </div>
                </form>
              </Form>
            </div>
          </Card>

          {/* Contact info / sidebar */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="rounded-3xl border border-[#18181b] bg-gradient-to-b from-[#020617] to-[#020617]/90">
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    Prefer to talk directly?
                  </h3>
                  <p className="text-sm md:text-base text-slate-400">
                    Reach out through any of these channels and we&apos;ll
                    respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-[#111827] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400">
                        Email
                      </div>
                      <a
                        href="mailto:hello@webdesigno.com"
                        className="text-sm md:text-base text-slate-100 hover:text-[#A855F7]"
                      >
                        hello@webdesigno.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-[#111827] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400">
                        Phone
                      </div>
                      <a
                        href="tel:+1234567890"
                        className="text-sm md:text-base text-slate-100 hover:text-[#A855F7]"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-[#111827] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400">
                        Location
                      </div>
                      <div className="text-sm md:text-base text-slate-100">
                        Remote • Worldwide
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-500">
                  This contact form is for demonstration purposes only. No data
                  is stored or sent to a server.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}