import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { apimInterceptor } from './shared/apim/apim.interceptor';

import { MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalService, MsalGuard, MsalBroadcastService } from '@azure/msal-angular';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withXhr(), 
            withInterceptorsFromDi(),
            withInterceptors([apimInterceptor])
        ),
        provideRouter(
            appRoutes,
            withComponentInputBinding()
        ),
        provideAnimations(),
    ]
};