import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
  id?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTabId,
  className = '',
  id = 'artavel-tabs'
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTabId || items[0]?.id || ''
  );

  return (
    <div id={id} className={`w-full ${className}`}>
      {/* Tab Navigation List */}
      <div
        role="tablist"
        aria-label="Tabs Navigasi"
        className="flex items-center gap-2 border-b border-[#DBE4EB] overflow-x-auto pb-px"
      >
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-btn-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tab-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
                isActive
                  ? 'border-[#36699C] text-[#36699C] bg-[#EAF2F8]/50 rounded-t-lg'
                  : 'border-transparent text-[#5C6B79] hover:text-[#172536] hover:border-[#DBE4EB]'
              }`}
            >
              {tab.icon && <span aria-hidden="true">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {items.map((tab) => {
          const isActive = activeTab === tab.id;
          if (!isActive) return null;

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`tab-panel-${tab.id}`}
              aria-labelledby={`tab-btn-${tab.id}`}
              tabIndex={0}
              className="focus-visible:outline-none"
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
