import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export interface BannerProps {
  label: string;
  link?: { src: string; label: string };
  onDismiss?: () => void;
  Icon?: () => JSX.Element;
}

export default ({
  label,
  link,
  onDismiss = () => alert("initialize onDismiss event"),
  Icon = () => (
    <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
  ),
}: BannerProps) => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <Icon />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">{label}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            {link && (
              <a
                href={link.src}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                {link.label}
              </a>
            )}
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              onClick={onDismiss}
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
