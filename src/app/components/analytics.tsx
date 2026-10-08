"use client";

import Script from "next/script";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName =
  | "cta_click"
  | "product_cta_click"
  | "service_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "intake_start"
  | "intake_submit"
  | "intake_success"
  | "intake_error"
  | "waitlist_submit"
  | "waitlist_success"
  | "waitlist_error"
  | "assessment_start"
  | "assessment_complete";

type DataLayerEvent = {
  event?: AnalyticsEventName | "page_view" | "gtm.js";
  [key: string]: unknown;
};

type AnalyticsProps = {
  gtmId?: string;
  gaMeasurementId?: string;
  clarityId?: string;
};

export function trackEvent(name: AnalyticsEventName, payload: DataLayerEvent = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ...payload, event: name });
}

function GoogleAnalyticsPageViews({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId,
    });
  }, [measurementId, pathname, searchParams]);

  return null;
}

export function Analytics({ gtmId, gaMeasurementId, clarityId }: AnalyticsProps) {
  const googleTagManagerId = gtmId?.trim();
  const googleAnalyticsId = gaMeasurementId?.trim();
  const microsoftClarityId = clarityId?.trim();
  const shouldUseDirectGa = Boolean(googleAnalyticsId && !googleTagManagerId);

  return (
    <>
      {googleTagManagerId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
      )}

      {shouldUseDirectGa && googleAnalyticsId && (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', { send_page_view: false });
            `}
          </Script>
          <Suspense fallback={null}>
            <GoogleAnalyticsPageViews measurementId={googleAnalyticsId} />
          </Suspense>
        </>
      )}

      {microsoftClarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarityId}");
          `}
        </Script>
      )}
    </>
  );
}
