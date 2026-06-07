import type { ComputedRef, InjectionKey } from 'vue'

export interface SidebarContext {
  state: ComputedRef<string>
  toggleSidebar: () => void
}

export const myInjectionKey: InjectionKey<SidebarContext> = Symbol()
