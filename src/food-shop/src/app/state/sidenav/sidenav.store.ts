import { computed, inject } from '@angular/core';
import { patchState, signalStore, withState, withComputed, withMethods } from '@ngrx/signals';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

type SidenavState = {
    sideNavEnabled: boolean;
    sideNavVisible: boolean;
    sideNavPosition: string;
};

const initialState: SidenavState = {
    sideNavEnabled: true,
    sideNavVisible: true,
    sideNavPosition: 'side',
};

export const sidenavStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        toggleSideNav(): void {
            patchState(store, { sideNavVisible: !store.sideNavVisible() });
        },
        setSideNavEnabled(enabled: boolean): void {
            patchState(store, { sideNavEnabled: enabled, sideNavVisible: enabled });
        },
        setSideNavVisible(visible: boolean): void {
            patchState(store, { sideNavVisible: visible });
        },
        setSideNavPosition(position: string): void {
            patchState(store, { sideNavPosition: position });
        },
        adjustSidenavToScreen(mq: string): boolean {
            return mq === 'xs' ? false : true;
        },
    }))
);
