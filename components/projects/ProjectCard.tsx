"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { LoadingButton } from '@/components/ui/loading-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircleIcon, ExpandIcon, SquareArrowOutUpRightIcon, XCircleIcon } from 'lucide-react';
import * as React from 'react';

import { technologies } from '../skills/technologies';
import Link from 'next/link';

const techMap = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech;
  return acc;
}, {} as Record<string, typeof technologies[number]>);

export interface IProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  github: string;
  images: string[];
  features: string[]
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex pb-5">
          {props.url &&
          <Link href={props.url} target="_blank" rel="noopener noreferrer" className="">
            <div className="flex flex-nowra items-center bg-primary text-primary-foreground border border-primary px-2 py-1 rounded-lg mr-4">Visit<SquareArrowOutUpRightIcon size={20} className='ml-1' /></div>
          </Link>}
          {props.github &&
          <Link href={props.github} target="_blank" rel="noopener noreferrer" className="">
            <div className="flex flex-nowra items-center border border-primary px-2 py-1 rounded-lg mr-4">Github<SquareArrowOutUpRightIcon size={20} className='ml-1' /></div>
          </Link>}
        </div>
        <div className="flex flex-col gap-2">
          <Label>Technologies</Label>
          <div className="flex flex-wrap w-full gap-y-2">
            {props.technologies.slice(0, 8).map((technology) => {
              const tech = techMap[technology] || { name: technology };
              return (
                <span className="flex flex-nowrap items-center mr-2 border px-2 py-1 rounded-lg text-sm" key={technology}>
                  {tech.icon && <tech.icon size={20} className='mr-1' />}
                  {technology}
                </span>
              );
              { technologies.length > 8 && <span className="text-sm">...</span> }
            })}
          </div>
          {/* <div className="grid grid-flow-row gap-2">
            <Label>Features</Label>
            {props.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div> */}
        </div>
      </CardContent>
      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
      </Dialog> */}
    </Card>
  );
}
