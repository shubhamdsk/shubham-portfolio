# Angular Portfolio Development Guidelines

You are an expert in TypeScript, Angular, SCSS, accessibility, and scalable frontend architecture.

Write clean, functional, maintainable, performant, and accessible code following modern Angular and TypeScript best practices.

This project uses Angular 21, standalone components, Signals, SCSS, BEM naming, and lazy-loaded routes.

---

## TypeScript Best Practices

- Use strict type checking.
- Prefer type inference when the type is obvious.
- Avoid the `any` type.
- Use `unknown` when the type is uncertain.
- Create proper interfaces/types inside the `models` folder.
- Keep interfaces focused and reusable.
- Avoid unnecessary getters and setters.
- Prefer readonly properties where mutation is not required.
- Keep functions small and predictable.

---

## Angular Best Practices

- Always use standalone components.
- Do NOT set `standalone: true` inside Angular decorators because it is the default in Angular v20+.
- Use Signals for local and UI state management.
- Use `computed()` for derived state.
- Use `effect()` only when side effects are truly required.
- Implement lazy loading for feature routes.
- Use `inject()` instead of constructor injection.
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in every component.
- Use `providedIn: 'root'` for singleton services.
- Keep components small and focused on a single responsibility.
- Move reusable logic into services, utilities, pipes, or directives.
- Do not place heavy business logic inside components.
- Do not directly call methods from templates except event handlers like button clicks.
- Avoid getters and setters for template binding.
- Prefer signals/computed values over getter-based derived values.
- Use `NgOptimizedImage` for all static images.
- `NgOptimizedImage` does not work for inline base64 images.

---

## Component Rules

- Use `input()` and `output()` functions instead of `@Input()` and `@Output()`.
- Do NOT use `@HostBinding` and `@HostListener`.
- Use the `host` object inside `@Component` or `@Directive` metadata instead.
- Prefer inline templates only for very small components.
- Use external HTML and SCSS files for normal page/section components.
- When using external templates/styles, use paths relative to the component TypeScript file.
- Keep component state private when possible.
- Expose only the state required by the template.
- Do not mutate arrays/objects directly inside signals.
- Use `set()` or `update()` for signal updates.
- Do not use `mutate()` on signals.

---

## Template Rules

- Keep templates simple and readable.
- Use native Angular control flow:
  - `@if`
  - `@for`
  - `@switch`
- Do NOT use:
  - `*ngIf`
  - `*ngFor`
  - `*ngSwitch`
- Do not call component methods directly from templates for rendering values.
- Calling methods from templates is allowed only for event handlers, for example:
  - `(click)="onMenuToggle()"`
  - `(submit)="onSubmit()"`
- Use `computed()` for values that need calculation before rendering.
- Use the `async` pipe to handle observables.
- Do not assume globals like `new Date()` are available inside templates.
- Avoid complex conditions and calculations inside templates.
- Use `track` in `@for` loops.
- Do NOT use `ngClass`.
- Use class bindings instead:
  - `[class.header__link--active]="isActive()"`
- Do NOT use `ngStyle`.
- Use style bindings instead:
  - `[style.width.%]="progress()"`

---

## SCSS & Styling Rules

- Use SCSS for all styling.
- Use BEM naming convention.
- Use nested SCSS where it improves readability.
- Keep styles scoped to the component.
- Avoid global styles unless they are true design tokens, resets, typography, or layout utilities.
- Do not use Tailwind CSS unless explicitly requested.
- Prefer semantic class names.

Example:

```scss
.header {
  &__brand {
    display: flex;
    align-items: center;
  }

  &__nav {
    display: flex;
    gap: 1rem;
  }

  &__link {
    text-decoration: none;

    &--active {
      font-weight: 600;
    }
  }
}
```
---

## Accessibility Requirements

* The UI must pass AXE checks.
* Follow WCAG AA minimum requirements.
* Maintain proper color contrast.
* Use semantic HTML wherever possible.
* Use buttons for actions and anchors for navigation.
* Add accessible labels for icon-only buttons.
* Ensure keyboard navigation works correctly.
* Manage focus where needed, especially in menus, modals, and popups.
* Use ARIA attributes only when semantic HTML is not enough.
* Do not remove visible focus indicators.

---

## Forms

* Prefer Reactive Forms.
* Do not use Template-driven forms unless explicitly required.
* Add validation messages.
* Keep validation logic clean and reusable.
* Disable submit buttons when forms are invalid or submitting.
* Show loading and error states where required.

---

## Services

* Design services around a single responsibility.
* Use `providedIn: 'root'` for singleton services.
* Use `inject()` instead of constructor injection.
* Keep API and business logic inside services.
* Do not call APIs directly from components.
* Keep data transformation logic inside services when it is shared or reusable.
* Return strongly typed data.
* Avoid `any` in API responses.

---

## State Management

* Use Signals for local component state.
* Use services with Signals for shared lightweight state.
* Use `computed()` for derived state.
* Keep state transformations pure and predictable.
* Use `set()` and `update()` for signal changes.
* Do NOT use `mutate()`.
* Do not introduce external state management unless the requirement clearly needs it.

---

## Routing

* Use lazy-loaded feature routes.
* Keep route definitions clean and readable.
* Add page titles for routes.
* Use route-level code splitting where suitable.
* Keep layout routes separate from feature page routes.

---

## File Naming

This project follows the Angular v20+ concise file naming style for components.

Use:

```text
home.ts
home.html
home.scss
```

Avoid:

```text
home.component.ts
home.component.html
home.component.scss
```

For non-component files, use clear suffixes:

```text
project.model.ts
navigation.model.ts
theme.service.ts
app.constant.ts
route-path.enum.ts
```

---

## Folder Structure

Follow this structure:

```text
src/app/
├── core/
│   ├── directives/
│   ├── enums/
│   ├── guards/
│   ├── interceptors/
│   ├── pipes/
│   └── store/
├── features/
├── models/
├── services/
└── shared/
    ├── components/
    ├── loaders/
    ├── modals/
    ├── popups/
    └── snackbars/
```

---

## Code Quality

* Keep code production-readable.
* Do not over-engineer simple requirements.
* Prefer reusable components only when reuse is clear.
* Keep naming consistent.
* Avoid dead code.
* Avoid commented-out code.
* Avoid duplicate logic.
* Do not remove existing functionality unless explicitly requested.
* Explain important architectural decisions through clean naming and structure, not excessive comments.