"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  type: string;
  date: string;
  requirements: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const payload = {
        access_key: "<YOUR_WEB3FORMS_KEY>",
        ...data,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className=" libertinus-sans-regular min-h-screen flex items-center justify-center bg-background py-12 px-2 md:px-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">
        
        {/* Left: Contact Info */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white">
          <h2 className="text-3xl md:text-4xl  mb-4 text-[#36454F]">
            Contact us
          </h2>
          <p className=" text-base md:text-xl max-w-xs mb-8 leading-relaxed text-[#36454F]">
            Please share a few details about your shoot or project below, the more we know, the better we can bring your vision to life.
          </p>
          <ul className="space-y-6 text-base text-[#36454F]">
            <li className="flex items-start gap-3">
              <Mail className="text-[#36454F] mt-1" />
              <span className="break-all ">iamapoorv23@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-[#36454F] mt-1 " />
              <span className="">
                Redwood Kosmos, Flat 407, <br /> Jaipur 303905
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-[#36454F] mt-1 " />
              <span>+91 93529 60101</span>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 w-full bg-[#f7f7f8] p-8 flex items-center justify-center">
          <Card className="w-full max-w-md shadow-none border-0 bg-[#f7f7f8]">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-[#36454F]">
                
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="mb-1 libertinus-sans-regular text-[#36454F]">
                    Name*
                  </Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">Name is required</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="mb-1 libertinus-sans-regular text-[#36454F]">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">Email is required</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="mb-1  text-[#36454F]">
                    Phone
                  </Label>
                  <Input id="phone" type="tel" {...register("phone")} />
                </div>

                {/* WhatsApp */}
                <div>
                  <Label htmlFor="whatsapp" className="mb-1  text-[#36454F]">
                    WhatsApp (optional)
                  </Label>
                  <Input id="whatsapp" type="tel" {...register("whatsapp")} />
                </div>

                {/* Type of Photoshoot */}
                <div>
                  <Label htmlFor="type" className="mb-1  text-[#36454F]">
                    Type of Photoshoot*
                  </Label>
                  <Input
                    id="type"
                    placeholder="e.g. Wedding, Portrait, Event..."
                    {...register("type", { required: true })}
                  />
                  {errors.type && (
                    <p className="text-red-500 text-xs mt-1">Type is required</p>
                  )}
                </div>

                {/* Tentative Date */}
                <div>
                  <Label htmlFor="date" className="mb-1  text-[#36454F]">
                    Tentative Date*
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1">Date is required</p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <Label
                    htmlFor="requirements"
                    className="mb-1  text-[#36454F]"
                  >
                    Tell us about your requirements*
                  </Label>
                  <Textarea
                    id="requirements"
                    rows={4}
                    placeholder="Share your vision, ideas, or any details..."
                    {...register("requirements", { required: true })}
                  />
                  {errors.requirements && (
                    <p className="text-red-500 text-xs mt-1">This field is required</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#36454F]  text-white font-semibold rounded-md py-2 mt-2 shadow-sm transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
