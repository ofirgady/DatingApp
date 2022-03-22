// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/testing';
=======
import 'zone.js/dist/zone-testing';
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
<<<<<<< HEAD
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true }},
);

=======
  platformBrowserDynamicTesting()
);
>>>>>>> 5c7541c67ee7901fc38c5b87ad10e9d410e34c52
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
