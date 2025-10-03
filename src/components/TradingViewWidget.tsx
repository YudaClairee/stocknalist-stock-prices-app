// TradingViewWidget.jsx
"use client";
import { useTradingViewWidget } from "@/hooks/useTradingViewWidget";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h2 className="font-semibold text-2xl text-gray-200 mb-5">{title}</h2>
      )}
      <div
        className={`tradingview-widget-container ${className}`}
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
