import { Clock, Settings, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-orange-100 rounded-full">
              <Settings
                className="h-12 w-12 text-orange-600 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Scheduled Maintenance
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto">
            We're currently performing scheduled maintenance to improve our
            services
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 space-y-6">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertDescription className="text-slate-700">
              Our website is temporarily unavailable due to scheduled
              maintenance. We apologize for any inconvenience.
            </AlertDescription>
          </Alert>

          {/* Expected Duration */}
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-50 rounded-lg">
            <Clock className="h-5 w-5 text-slate-500" />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-700">
                Expected Duration
              </p>
              <p className="text-lg font-semibold text-slate-900">2-4 hours</p>
            </div>
          </div>

          {/* What we're doing */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">
              What we're working on:
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>Server infrastructure upgrades</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>Performance optimizations</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>Security enhancements</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-4">
          <p className="text-slate-600">
            Need immediate assistance? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:larrybwosi@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:+254710805302"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Call Support
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500">
          <p>
            We'll be back online as soon as possible. Thank you for your
            patience!
          </p>
          <p className="mt-2">Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
