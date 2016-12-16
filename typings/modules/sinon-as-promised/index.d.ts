// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/8841dfc744bce6b2d3e075f7ace25c0c1e664c17/sinon-as-promised/index.d.ts
declare module 'sinon-as-promised' {
// Type definitions for sinon-as-promised v4.0.0
// Project: https://github.com/bendrucker/sinon-as-promised
// Definitions by: igrayson <https://github.com/igrayson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as s from 'sinon';

module 'sinon' {
  interface SinonStub {

    /**
     * When called, the stub will return a "thenable" object which will return a promise for the provided value. Any Promises/A+ compliant library will handle this object properly.
     */
    resolves(value:any):SinonStub;

    /**
     * When called, the stub will return a thenable which ill return a reject promise with the provided err. If err is a string, it will be set as the message on an Error object.
     */
    rejects(err:any):SinonStub;
  }

}
}