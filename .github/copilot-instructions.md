# Copilot Instructions for AI Coding Agents

## Project Overview
- **Frontend:** React (TypeScript) with Vite
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Features:** GPT integration, voice features, user dashboards

## Key Architecture & Patterns
- **Entry Point:** `src/main.tsx` bootstraps the app; `App.tsx` is the root component.
- **Routing:** Managed via `src/routes.tsx`.
- **Pages:** All main views are in `src/pages/` (e.g., `DashboardMedico.tsx`, `DashboardPaciente.tsx`, `NoaChatPage.tsx`).
- **Components:** Reusable UI in `src/components/` (e.g., `ChatWindow`, `EscuteSeCard`).
- **Hooks:** Custom React hooks in `src/hooks/` (e.g., `useToast`, `useUserType`).
- **Utilities:** Shared helpers in `src/utils/helpers.ts`.
- **Assets:** Static files in `public/`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Install Dependencies:** `npm install`
- **Tailwind Config:** `tailwind.config.ts` (customizations)
- **TypeScript Config:** `tsconfig.json`

## Integration Points
- **GPT & Voice:** Custom logic for GPT and voice features is likely in components or hooks (see `NoaAgent.tsx`).
- **Vercel Deploy:** Deployment config in `vercel.json`.

## Project-Specific Conventions
- **TypeScript everywhere (no JS files).**
- **Component and page naming:** PascalCase, descriptive names.
- **Hooks:** Always start with `use`, live in `src/hooks/`.
- **Pages:** One per main user flow, in `src/pages/`.
- **Assets:** Only reference files in `public/` for static resources.

## Examples
- To add a new dashboard page: create `src/pages/DashboardX.tsx`, add route in `src/routes.tsx`.
- To add a new hook: create `src/hooks/useFeature.ts`, import in relevant component.
- To update GPT logic: check `src/components/NoaAgent.tsx` and related hooks.

## References
- `README.md` for high-level project summary
- `vercel.json` for deployment settings
- `tailwind.config.ts` for styling rules

---
**For questions or unclear conventions, ask for clarification or check existing patterns in `src/components/`, `src/pages/`, and `src/hooks/`.**
