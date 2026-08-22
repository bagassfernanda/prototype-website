import type { InsightArticle } from '../types';

export type InsightArticleTranslation = Partial<
  Pick<
    InsightArticle,
    | 'title'
    | 'excerpt'
    | 'contentMarkdown'
    | 'category'
    | 'authorName'
    | 'authorRole'
    | 'ctaLabel'
  >
> & {
  relatedSolution?: {
    label?: string;
    path?: string;
  };
  metadata?: {
    title?: string;
    description?: string;
  };
};

export const INSIGHT_EN_TRANSLATIONS: Record<string, InsightArticleTranslation> = {
  'perbedaan-scan-dokumen-dan-kearsipan-digital': {
    title: 'Why PDF Scans Alone Are Not Yet Digital Archiving',
    excerpt:
      'Scanning paper into PDF files is only the first step. Without classification, metadata, access rights, and archive retention, digital documents remain difficult to manage.',
    contentMarkdown: `
### A Common Misunderstanding About Document Digitization

Many organizations assume that once physical files have been scanned and stored in computer folders, archive digitization is complete. In reality, scanning documents without an archive management system only moves the problem from physical storage to digital storage.

The documents may no longer sit in cabinets, but search, access control, retention cycles, and activity accountability are still not automatically structured. At organizational scale, this becomes a real issue when file volume keeps growing and many units need access to the same documents.

---

### Three Core Components of Digital Archiving

1. **Classification Codes and Metadata**
   - Every document should be connected to metadata such as letter number, date, subject, archive creator, confidentiality level, and classification code.
   - Metadata makes search less dependent on file names or individual memory.

2. **Archive Retention Schedule**
   - Archives have a lifecycle: active, inactive, transferred, destroyed, or preserved as permanent archives.
   - A good system helps administrators know when archives need to be reviewed according to internal rules and applicable regulations.

3. **Access Rights and Audit Trail**
   - Not every employee needs access to every organizational archive.
   - Audit trails help record who opened, downloaded, changed, or moved a document.

### Impact for Organizations

Structured digital archiving makes document search more controlled, reduces dependency on personal folders, and supports audit processes. Teams can also distinguish active documents, reference documents, and archives that must be managed according to their retention period.

### Connection to Smarchlink Archive

Smarchlink Archive is designed to help organizations structure documents and archives more clearly. It is relevant for organizations that want to move from a collection of PDF files toward a digital archive system with classification, access rights, and clearer archive management.
    `,
    category: 'Digital Government',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Digital Government Specialist',
    ctaLabel: 'Explore Smarchlink Archive',
    relatedSolution: {
      label: 'Digital Government & Enterprise'
    },
    metadata: {
      title: 'Digital Archiving Is More Than PDF Scanning | PT Artavel',
      description:
        'Learn the difference between ordinary PDF scans and a digital archive system with metadata, classification, retention, access rights, and audit trails.'
    }
  },
  'mengapa-audit-trail-penting-dalam-tnde': {
    title: 'Why Audit Trails Matter in Electronic Official Correspondence Systems',
    excerpt:
      'In official correspondence governance, knowing who created, reviewed, approved, and sent a document is a core part of organizational accountability.',
    contentMarkdown: `
### What Is an Audit Trail in TNDE?

An audit trail is a chronological record of user activity inside an application. In the context of **Electronic Official Correspondence (TNDE)**, audit trails help record draft creation, initials, dispositions, approvals, numbering, and document delivery.

Without audit trails, organizations often struggle to answer simple questions: who changed the latest draft, when a disposition was forwarded, or which unit has not followed up on leadership instructions.

---

### Why Does It Matter?

1. **Accountability Across Approval Flows**
   - Every correspondence step can be traced by role and time.
   - Leaders and administrators can see document status without searching manually.

2. **Reducing Duplicate Numbering and Version Risks**
   - The system helps manage numbers, versions, and document statuses more orderly.
   - Teams no longer need to depend on local files that are easy to mix up.

3. **Disposition Monitoring**
   - Dispositions can be monitored from recipient, read status, to follow-up.
   - Organizations gain clearer visibility into workload and unit response.

### When Does TNDE Become Urgent?

TNDE becomes relevant when correspondence volume increases, approval flows involve many roles, or an organization needs to ensure official correspondence follows internal policy. The system helps reduce manual processes without removing leadership control.

### Connection to Artavel Products

Artavel TNDE focuses on digitizing official correspondence, dispositions, numbering, letter templates, and electronic signatures according to organizational needs. Audit trail is one of the foundations that makes the flow monitorable and accountable.
    `,
    category: 'Digital Government',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Governance & Workflow Specialist',
    ctaLabel: 'Explore TNDE',
    relatedSolution: {
      label: 'Digital Government & Enterprise'
    },
    metadata: {
      title: 'Audit Trails in TNDE | PT Artavel',
      description:
        'Why audit trails matter in electronic official correspondence systems for accountability, disposition monitoring, and document control.'
    }
  },
  'perbedaan-cloud-vs-on-premise-layanan-pemerintah': {
    title: 'On-Premise vs Cloud: Choosing the Right Deployment Architecture for Institutions',
    excerpt:
      'Every infrastructure choice has consequences. Consider regulations, data control, user access, budget, and internal IT capability before deciding.',
    contentMarkdown: `
### Questions to Answer Early

When an organization wants to implement a digital system, deployment questions often appear early: should the application run on local servers or in a cloud environment? The answer is not the same for every institution.

The right choice depends on regulations, data sensitivity, infrastructure readiness, user access patterns, and internal capability to manage servers and backups.

---

### On-Premise Model

On-premise means the application runs on servers managed within the organization or in a designated data center. This model is suitable when an organization needs direct control over infrastructure, internal networks, or specific data storage policies.

However, this model also requires readiness in hardware, power, cooling, backup, network security, and technical staff. Without proper governance, a local server can become a new risk point.

### Private Cloud Model

Private cloud helps organizations reduce upfront hardware procurement and makes user access more flexible. This model is relevant when users need to access applications from different locations with clear security governance.

Important considerations include internet connection quality, access policy, backup model, and service contracts with infrastructure providers.

### Hybrid as a Middle Path

Some organizations choose a hybrid approach. For example, the primary application runs on a specific server, while backup, replica, or supporting services use cloud infrastructure. This approach keeps data control manageable while still gaining access flexibility.

### Principles for Choosing Deployment

Deployment decisions should not be based only on trends. They should be based on operational needs, regulations, risks, and long-term maintenance capability. A good system must run stably, be monitored, and be developed according to organizational needs.
    `,
    category: 'Technology & Digital Transformation',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'System & Infrastructure Specialist',
    ctaLabel: 'Discuss System Architecture',
    relatedSolution: {
      label: 'Digital Government & Enterprise'
    },
    metadata: {
      title: 'On-Premise vs Cloud for Digital Systems | PT Artavel',
      description:
        'A practical guide to choosing on-premise, private cloud, or hybrid deployment based on regulations, data control, user access, and operational capability.'
    }
  },
  'ai-dan-analytics-apa-bedanya': {
    title: 'AI and Analytics: What Is the Difference in Digital Systems?',
    excerpt:
      'AI and analytics are often mentioned together, but they serve different functions. Understanding the difference helps organizations choose the right solution.',
    contentMarkdown: `
### Why These Terms Are Often Mixed Up

Many organizations want to start using AI, but the actual problem they want to solve is not always clear. On the other hand, some needs can be addressed with analytics, dashboards, or structured data visualization.

Distinguishing AI from analytics keeps technology investment realistic. Not every dashboard is AI, and not every digital system needs AI to create value.

### Analytics Helps Read Data

Analytics focuses on collecting, processing, and presenting data so decisions are easier to make. Examples include visitor count dashboards, sales charts, branch performance reports, regional potential maps, or student attendance summaries.

Analytics answers questions such as:

- What is happening?
- Where is it happening?
- When does the pattern appear?
- Which area needs attention?

### AI Helps Recognize Patterns or Provide Smart Assistance

AI is used when a system needs to recognize patterns, classify objects, or help create certain drafts. Examples include computer vision for vehicle detection, people counting, or draft question assistance in school systems.

AI must still be limited to the right context. In education, for example, AI can help teachers prepare question draft variations, but teachers still review and make the final decision.

### How to Choose the Right Approach

Start from the business problem. If the problem is scattered data that is difficult to read, analytics can be the first step. If the problem requires visual detection, pattern classification, or limited generative assistance, AI can become part of the solution.

### Connection to Artavel Solutions

Artavel positions AI and analytics as cross-solution capabilities. SmartMap, FootfallCam, AI CCTV, otoPOS analytics, and school dashboards sit on different parts of the needs spectrum, but all are directed toward helping organizations read real-world conditions more clearly.
    `,
    category: 'AI, Analytics & Monitoring',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Technology Solution Specialist',
    ctaLabel: 'Explore AI & Analytics',
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring'
    },
    metadata: {
      title: 'AI and Analytics: What Is the Difference? | PT Artavel',
      description:
        'A practical explanation of the difference between AI and analytics in digital systems, dashboards, computer vision, SmartMap, FootfallCam, and operational solutions.'
    }
  },
  'people-counting-untuk-pengambilan-keputusan': {
    title: 'People Counting: Why Visitor Count Matters for Decision-Making',
    excerpt:
      'Visitor count data helps operators understand density, visit duration, area patterns, and operational effectiveness more objectively.',
    contentMarkdown: `
### Visitor Data Is More Than Entry Numbers

Visitor count may look simple, but for public spaces, retail stores, malls, museums, libraries, or commercial areas, this data can become an important basis for decision-making.

Without consistent data, operators tend to rely on visual estimates. Those estimates are difficult to compare across days, zones, or periods.

### What Can People Counting Reveal?

People counting helps read visit patterns such as visitor count, visit duration, returning visitors, outside traffic, zone analytics, and movement patterns between areas. In a business context, this data can be connected to store operations, area performance, or staff placement needs.

For public spaces, visit data can help identify peak hours, queue management needs, or facility usage evaluation.

### Analytics Helps Read Patterns

People counting data becomes more useful when displayed as analytics. Operators do not only see daily numbers, but also trend patterns, active zones, period comparisons, and insights that support planning.

Examples of supported decisions:

- Adjusting staff schedules during peak hours.
- Evaluating area layout effectiveness.
- Reading visit trends across periods.
- Measuring the impact of programs or events on traffic.

### FootfallCam Positioning

FootfallCam can be positioned as a partner technology for people counting and visitor analytics needs. Capabilities such as visitor count, visit duration, returning visitor, zone analytics, business intelligence analytics, predictive analytics, centralized counter management, and API integration can be used according to implementation needs.

### When Should an Organization Start?

People counting is relevant when operators need visitor data that is more consistent than manual observation. The first step is to define the areas to monitor, the business or operational objective, and the report types that are truly needed.
    `,
    category: 'AI, Analytics & Monitoring',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Analytics Solution Specialist',
    ctaLabel: 'Explore FootfallCam',
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring'
    },
    metadata: {
      title: 'People Counting for Decision-Making | PT Artavel',
      description:
        'Why visitor count, visit duration, zone analytics, and business intelligence analytics matter for retail, malls, public spaces, museums, and libraries.'
    }
  },
  'smartmap-data-geospasial': {
    title: 'SmartMap: Why Data Is Easier to Understand When Shown Geospatially',
    excerpt:
      'Location data is often difficult to understand in tables. Geospatial visualization helps organizations read areas, objects, potential, and field activity more quickly.',
    contentMarkdown: `
### Not All Data Is Best Read as Tables

Many organizational datasets have location context. Tax objects, assets, field work points, service areas, regional potential, and facility distribution are easier to understand when visualized on a map.

When location-based data is stored only in tables, users must imagine spatial relationships manually. This slows analysis, especially when decisions require area context.

### What Does SmartMap Mean?

SmartMap is a public-facing way to explain digital map, GIS, WebGIS, VirtualMAP, JobMAP, and location analytics capabilities. The term helps visitors understand that maps are not only location displays, but tools for reading data.

In implementation, official product or module names such as VirtualMAP and JobMAP should still be preserved. SmartMap is used as a communication umbrella so the benefit is easier to understand.

### Needs That Can Be Supported

- Viewing objects and statuses by region.
- Reading potential maps or service area distribution.
- Monitoring field work based on location points.
- Connecting PBB or regional object data with map visualization.
- Viewing detailed object information without opening many separate tables.

### Location-Based Analytics

Location analytics helps organizations understand data spatially. Differences between areas, object density, priority zones, and status changes become clearer when visualized on a map.

However, it is important not to call every mapping capability AI. If the system only performs geospatial visualization and analysis, the more accurate terms are GIS analytics or location analytics.

### Connection to Artavel Solutions

Artavel SmartMap & GIS Analytics connects digital mapping needs with products or modules such as WebGIS, VirtualMAP, JobMAP, map-based PBB online services, potential maps, and location-based monitoring. The focus is helping organizations read regional data in a more measurable way.
    `,
    category: 'AI, Analytics & Monitoring',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'GIS & Analytics Specialist',
    ctaLabel: 'Explore SmartMap & GIS Analytics',
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring'
    },
    metadata: {
      title: 'SmartMap and Geospatial Data | PT Artavel',
      description:
        'Why GIS, WebGIS, VirtualMAP, JobMAP, potential maps, and location analytics help organizations understand location-based data.'
    }
  },
  'data-sekolah-terintegrasi': {
    title: 'Why Academic and School Administration Data Should Be Integrated',
    excerpt:
      'Schools need consistent data for academics, administration, finance, communication, and monitoring. Integration helps reduce duplicate work.',
    contentMarkdown: `
### Common Problems in School Environments

Schools often manage many separate data streams: student data, schedules, grades, attendance, finance, parent information, and administrative documents. When these are handled through spreadsheets or different applications, synchronization becomes a recurring task that consumes time.

The issue may not appear when the data volume is still small. But when a school has many classes, levels, or units, a single student data change can affect many processes.

### What Are the Benefits of Integrated Data?

Integrated data helps schools reduce repeated input and clarify the main source of truth. When student, teacher, class, billing, attendance, and learning activity data are connected, administration becomes easier to monitor.

Benefits include:

- Administrators do not need to enter the same data in many places.
- Teachers can access class and student information more neatly.
- Parents receive school information through clearer channels.
- School leaders can read operational summaries from dashboards.

### Role-Based Portals Matter

A good school system does not provide one dashboard for everyone. Administrators, foundations, teachers, students, and parents have different needs. Role-based portals help each user see information relevant to their responsibilities.

### Connection to otoSchool

otoSchool is positioned as an integrated school management system. Modules such as school website, online PPDB, admin/foundation portal, teacher portal, student portal, parent portal, digital learning, report cards, attendance, academic calendar, finance, billing, e-wallet, multi-level, multi-role, and Progressive Web App sit in one ecosystem.

### Start from the Highest-Priority Process

Schools do not need to digitize everything at once. Initial mapping can start from the processes that consume the most time, such as PPDB, student administration, attendance, parent communication, or academic reporting.
    `,
    category: 'Digital Education',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Education Solution Specialist',
    ctaLabel: 'Explore otoSchool',
    relatedSolution: {
      label: 'Smart Education'
    },
    metadata: {
      title: 'Integrated Academic and School Administration Data | PT Artavel',
      description:
        'Why schools need to connect academic, administrative, finance, communication, and dashboard data through an integrated system such as otoSchool.'
    }
  },
  'ai-untuk-guru-draf-soal': {
    title: 'AI for Teachers: Helping Draft Questions Without Replacing Teachers',
    excerpt:
      'AI can help teachers prepare question draft variations, but quality, context, and final decisions remain with teachers.',
    contentMarkdown: `
### AI as an Assistant, Not a Teacher Replacement

In education, AI should be positioned as an assistant. Its purpose is not to replace teachers, but to help with repetitive work or early-stage variation, such as preparing draft questions based on a specific topic.

Teachers still hold the main role in determining material relevance, difficulty level, classroom context, and assessment standards.

### How Can AI Help Draft Questions?

In the otoSchool context, AI can help create question draft variations based on a topic entered by the teacher. Those drafts are then reviewed, edited, and approved by the teacher before use.

A healthy flow looks like this:

1. The teacher defines the topic and learning context.
2. AI helps create draft question variations.
3. The teacher reviews language, answers, difficulty level, and curriculum fit.
4. The teacher decides which questions are suitable to use.

### Why Teacher Review Remains Important

AI does not fully understand classroom character. Teachers understand student abilities, learning goals, and school context. For that reason, AI output should be treated as a draft, not a final decision.

Teacher review is also important to avoid ambiguous questions, material mismatch, or questions that are too easy or too difficult for a particular evaluation goal.

### Connection to SmartExam and Question Bank

AI-assisted question drafting becomes more useful when connected to SmartExam and question banks. Teachers can manage questions, prepare exams, review results, and evaluate learning through a more structured flow.

### Responsible Use Principle

Use AI to accelerate the early stage, while keeping teachers as quality controllers. With this position, AI supports productivity without reducing the professional role of educators.
    `,
    category: 'Digital Education',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Education Technology Specialist',
    ctaLabel: 'Explore otoSchool Modules',
    relatedSolution: {
      label: 'Smart Education'
    },
    metadata: {
      title: 'AI for Teachers in Question Drafting | PT Artavel',
      description:
        'How to position AI as a teacher assistant for question drafting, with teacher review and approval before use.'
    }
  },
  'pos-modern-bukan-hanya-transaksi': {
    title: 'Why a Modern POS Is Not Only About Recording Transactions',
    excerpt:
      'F&B businesses need POS that connects inventory, employees, loyalty, finance, assets, and performance dashboards.',
    contentMarkdown: `
### Cashier Functions Are Only One Part of F&B Operations

At the early stage, cashier systems are often understood as tools for recording sales. But in a growing F&B business, transactions are only one part of daily operations.

Owners and managers need to understand which items are sold, who served the customer, which stock decreased, which branch is busy, and how shift and outlet performance are running.

### Sales Data Needs to Connect with Operations

If cashier data stands alone, sales data is separated from inventory, finance, and employee data. As a result, many recaps are still done manually. This becomes difficult when the business starts operating multiple branches or multiple operational roles.

A modern POS should help read:

- Dine-in, take-away, and delivery sales.
- Payments, tables, product modifiers, and kitchen tickets.
- Cashier and branch performance.
- Stock by branch and ingredients used.
- Finance summaries and operational costs.

### Workforce and Sales Analytics

In an F&B context, employee data can add context to sales data. The question is not only how much was sold, but who sold it, when the shift ran, and how punctuality or actual working hours affected operations.

The accurate terms for this need are operational analytics or workforce analytics. If verified AI capability is not present, it should not be called AI.

### Connection to otoPOS F&B

otoPOS F&B combines cashier and sales with smart employee attendance, loyalty member, smart inventory, finance, asset maintenance, and performance dashboard modules. The focus is not only transaction recording, but more integrated F&B operational management.
    `,
    category: 'Retail & F&B',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Retail & F&B Solution Specialist',
    ctaLabel: 'Explore otoPOS F&B',
    relatedSolution: {
      label: 'Retail & F&B'
    },
    metadata: {
      title: 'Modern POS Is More Than Transaction Recording | PT Artavel',
      description:
        'Why F&B businesses need POS connected to inventory, workforce analytics, loyalty, finance, assets, and performance dashboards.'
    }
  },
  'inventory-fnb-berbasis-resep': {
    title: 'Recipe-Based F&B Inventory: Why It Is More Complex Than Ordinary Product Stock',
    excerpt:
      'F&B inventory does not only count finished products. Ingredients, recipes, modifiers, branches, and daily usage need to be managed together.',
    contentMarkdown: `
### F&B Stock Is Not as Simple as Finished-Goods Stock

In general retail, stock is often counted by product item. In F&B, one menu can consist of many ingredients, one ingredient can be used across many menu items, and modifiers can affect sales composition.

That is why recording ending stock alone is not enough. Businesses need to understand the relationship between transactions, recipes, ingredient usage, and stock per branch.

### Why Are Recipes Important?

Recipes help the system understand which ingredients decrease when a menu item is sold. Without recipe structure, operators must calculate ingredient usage manually. This is prone to delays, especially during busy transactions or when outlets are spread across branches.

Recipe-based inventory helps read:

- Ingredient stock per branch.
- Ingredient usage based on transactions.
- Modifier impact on menu composition.
- Restock needs based on operations.
- Differences between unit stock, ingredients, and sellable products.

### Multi-Branch Challenges

In a multi-branch business, every outlet has different stock conditions, sales, and operating schedules. Without a centralized system, owners struggle to compare outlet performance and identify stock needs quickly.

### Connection to otoPOS F&B

otoPOS F&B includes a smart inventory module that supports stock management by unit, ingredient, recipe, modifier, and branch. Inventory data can connect with transactions, so operations are not only viewed from revenue, but also from ingredient readiness and outlet efficiency.

### Start from the Most Active Menus

Recipe-based inventory implementation should start from the most frequently sold menus or the menus most sensitive to ingredient costs. From there, the business can gradually expand the recipe structure.
    `,
    category: 'Retail & F&B',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Retail & F&B Solution Specialist',
    ctaLabel: 'Explore otoPOS Inventory',
    relatedSolution: {
      label: 'Retail & F&B'
    },
    metadata: {
      title: 'Recipe-Based F&B Inventory | PT Artavel',
      description:
        'Why F&B inventory needs to manage ingredients, recipes, modifiers, branch stock, and POS transaction connections.'
    }
  },
  'security-awareness-training': {
    title: 'Security Awareness Training: Why People Remain a Critical Part of Cybersecurity',
    excerpt:
      'Endpoint and email protection are not enough without prepared users. Awareness training helps organizations reduce risks from daily behavior.',
    contentMarkdown: `
### Security Technology Still Needs Prepared Users

Cybersecurity is not only about devices, endpoints, or detection systems. Many incidents begin with user activity: opening suspicious links, downloading attachments, sharing credentials, or ignoring security procedures.

That is why security awareness training is an important part of an organization security program.

### What Is Trained?

Security awareness training helps employees understand cyber risks in daily work. The material can cover phishing recognition, password practices, email security, link awareness, and habits for reporting suspicious activity.

In a modern approach, training does not have to be one long session. Microlearning, phishing simulation, automated training, and reporting help organizations run awareness programs in a more measurable way.

### Phishing Simulation as Safe Practice

Phishing simulation helps organizations test user readiness without waiting for a real attack. The goal is not to blame employees, but to understand improvement areas and provide relevant learning.

Simulation results can be used to prepare follow-up training, identify risk trends, and strengthen internal policies.

### Connection to OpenText Cybersecurity

OpenText Cybersecurity provides security awareness training capabilities such as phishing simulation, microlearning, automated training, reporting, and employee security awareness. In the Artavel context, OpenText is positioned as a partner technology, not an Artavel-owned product.

The official reference is available on the [OpenText Security Awareness Training page](https://cybersecurity.opentext.com/products/email-security/security-awareness-training/).

### Position in a Security Strategy

Security awareness training should be combined with endpoint security, EDR, access policy, and monitoring. This way, organizations do not only protect devices, but also build safer user habits.
    `,
    category: 'Cyber Security',
    authorName: 'Artavel Cybersecurity Team',
    authorRole: 'Cybersecurity Solution Specialist',
    ctaLabel: 'Explore OpenText Cybersecurity',
    relatedSolution: {
      label: 'Cyber Security'
    },
    metadata: {
      title: 'Security Awareness Training and the Human Factor | PT Artavel',
      description:
        'Why security awareness training, phishing simulation, microlearning, automated training, and reporting matter in an organization cybersecurity program.'
    }
  },
  'tracking-status-pelayanan-publik': {
    title: 'Why Status Tracking Matters in Digital Public Services',
    excerpt:
      'Status tracking helps citizens understand where their request stands, while officers can monitor service flows more orderly.',
    contentMarkdown: `
### Status Uncertainty Is Often a Service Problem

In public services, citizens do not only need their request completed. They also need process certainty: whether the file has been received, who is verifying it, when supporting documents are needed, and whether the process can move forward.

Without status tracking, these questions often return to counters or officers. As a result, communication workload increases and citizens feel that the process is not transparent.

### Tracking Helps Both Sides

For citizens, tracking provides clearer information about request position. For officers, tracking helps show the active stage, handling unit, and potential bottlenecks in the process.

Status tracking can be used to:

- View file or service number position.
- Reduce repeated questions to counters.
- Help officers prioritize follow-up.
- Provide service flow transparency.
- Become a basis for process-time evaluation.

### Connection to Queue Systems

In physical service spaces, tracking is also related to queues. Citizens need to know queue numbers, destination counters, call status, and estimated next steps. When queue and tracking are connected, the service experience becomes more organized.

### Connection to SIPPADU and SIANter

Smarchlink SIPPADU is relevant for request flows, verification, licensing, tracking, and service integration. SIANter is relevant for queue management, counter calling, display, and applicant tracking. Both help institutions structure services from process flow to interaction in service rooms.

### Implementation Principle

Status tracking should be simple for citizens, but detailed enough for officers. Information that is too technical can confuse users, while information that is too minimal does not help reduce uncertainty.
    `,
    category: 'Digital Government',
    authorName: 'Artavel Digital Solutions Team',
    authorRole: 'Public Service Solution Specialist',
    ctaLabel: 'Explore Public Service Solutions',
    relatedSolution: {
      label: 'Digital Government & Enterprise'
    },
    metadata: {
      title: 'Status Tracking in Digital Public Services | PT Artavel',
      description:
        'Why status tracking matters for public service transparency, request flows, queues, counter calls, and officer monitoring.'
    }
  }
};
