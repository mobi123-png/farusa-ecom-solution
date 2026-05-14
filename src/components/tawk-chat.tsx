import Script from "next/script";

const defaultPropertyId = "6a05c8b785bded1c2ed2bafc";
const defaultWidgetId = "1joj9g3vh";
const propertyId =
  process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || defaultPropertyId;
const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || defaultWidgetId;
const suppressDevOverlay = process.env.NODE_ENV !== "production";

export function TawkChat() {
  if (!propertyId || !widgetId) {
    return null;
  }

  const scriptContent = `
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function() {
      var originalConsoleError = window.console && window.console.error
        ? window.console.error.bind(window.console)
        : null;

      if (${JSON.stringify(suppressDevOverlay)} && originalConsoleError) {
        window.console.error = function() {
          if (arguments.length === 1 && arguments[0] === true) {
            return;
          }

          return originalConsoleError.apply(window.console, arguments);
        };

        window.setTimeout(function() {
          window.console.error = originalConsoleError;
        }, 8000);
      }

      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/${propertyId}/${widgetId}";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  `;

  return (
    <Script id="tawk-chat-widget" strategy="afterInteractive">
      {scriptContent}
    </Script>
  );
}
