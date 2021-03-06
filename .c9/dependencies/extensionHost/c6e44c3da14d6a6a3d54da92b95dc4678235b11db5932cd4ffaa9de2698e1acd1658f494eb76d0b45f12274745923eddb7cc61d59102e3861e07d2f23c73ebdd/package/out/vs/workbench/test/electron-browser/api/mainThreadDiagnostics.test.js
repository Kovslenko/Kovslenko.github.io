/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports", "assert", "vs/platform/markers/common/markerService", "vs/workbench/api/browser/mainThreadDiagnostics", "vs/base/common/uri"], function (require, exports, assert, markerService_1, mainThreadDiagnostics_1, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    suite('MainThreadDiagnostics', function () {
        let markerService;
        setup(function () {
            markerService = new markerService_1.MarkerService();
        });
        test('clear markers on dispose', function () {
            let diag = new mainThreadDiagnostics_1.MainThreadDiagnostics(new class {
                constructor() {
                    this.remoteAuthority = '';
                }
                assertRegistered() { }
                set(v) { return null; }
                getProxy() {
                    return {
                        $acceptMarkersChange() { }
                    };
                }
            }, markerService);
            diag.$changeMany('foo', [[uri_1.URI.file('a'), [{
                            code: '666',
                            startLineNumber: 1,
                            startColumn: 1,
                            endLineNumber: 1,
                            endColumn: 1,
                            message: 'fffff',
                            severity: 1,
                            source: 'me'
                        }]]]);
            assert.equal(markerService.read().length, 1);
            diag.dispose();
            assert.equal(markerService.read().length, 0);
        });
    });
});
//# sourceMappingURL=mainThreadDiagnostics.test.js.map