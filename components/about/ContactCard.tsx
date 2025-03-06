"user client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "../ui/textarea";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { sendMailContactEmail } from "./contactActions";
import { LoadingButton } from "../ui/loading-button";
import CheckCircleIcon from "@heroicons/react/24/outline/CheckCircleIcon";
import XCircleIcon from "@heroicons/react/24/outline/XCircleIcon";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  // contact: yup
  //   .mixed()
  //   .test("is-valid-contact", "Invalid email or phone", (val) => {
  //     const emailRegex =
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //     // const phoneRegex = /^\d{10}$/;
  //     // return emailRegex.test(val as string) || phoneRegex.test(val as string);
  //     return emailRegex.test(val as string);
  //   })
  //   .required("Contact is required"),
  contact: yup.string().email().required("Contact is required"),
  message: yup.string().required("Message is required"),
  subject: yup.string().required("Subject is required"),
});

export function ContactCard() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState("");

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    try {
      setIsLoading(true);
      const result = await sendMailContactEmail({
        name: data.name,
        subject: data.subject,
        email: data.contact,
        message: data.message,
      });
      console.log("result", result);
    } catch (error) {
      setIsError("An error occured, please try again later.");
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsDialogOpen(true);
    }
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect with me</CardTitle>
        <CardDescription>Let&lsquo;s get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="What should I call you?"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact">Email</Label>
              <Input
                id="contact"
                placeholder="How can I connect back?"
                {...register("contact")}
              />
              {errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Select
                name="subject"
                onValueChange={(value) => {
                  console.log(value);
                  setValue("subject", value);
                }}
              >
                <SelectTrigger>
                  <SelectValue
                    id="subject"
                    placeholder="What is it about?"
                    {...register("subject")}
                  />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="enquiry">Enquiry ❓</SelectItem>
                  <SelectItem value="suggestion">Suggestions 💡</SelectItem>
                  <SelectItem value="collaboration">
                    Collaboration 🤝
                  </SelectItem>
                  <SelectItem value="hire">Hire Me 👋💼</SelectItem>
                  <SelectItem value="social">Social Media 📱</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact-subject">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Feel free to write anything you want!"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>
          <CardFooter className="pt-2 px-0 flex justify-between">
            <Button variant="outline" onClick={() => reset()}>
              Reset
            </Button>
            <LoadingButton loading={isLoading} type="submit">
              Send
            </LoadingButton>
          </CardFooter>
        </form>
      </CardContent>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          {!isError ? (
            <>
              <DialogTitle>Thank you!</DialogTitle>
              <DialogDescription className="pt-2 text-center">
                <div className="flex justify-center w-full p-2">
                  <CheckCircleIcon className="w-20 h-20 text-green-500" />
                </div>
                Your message has been sent. I&lsquo;ll get back to you as soon
                as possible.
              </DialogDescription>
            </>
          ) : (
            <>
              <DialogTitle>Oops!</DialogTitle>
              <DialogDescription className="pt-2 text-center">
                <div className="flex justify-center w-full p-2">
                  <XCircleIcon className="w-20 h-20 text-red-500" />
                </div>
                Something went wrong. Please try again later.
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default ContactCard;
