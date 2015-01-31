/*
Tab Kit 2 - https://github.com/tabkit/tabkit2
Copyright © 2014 Leung Ho Kung (PikachuEXE) <pikachuexe@gmail.com>

This file is part of Tab Kit 2.

Tab Kit 2 is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

Tab Kit 2 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

For the complete terms of the GNU General Public License, please see this URL:
http://www.gnu.org/licenses/gpl-2.0.html
*/

/* jshint globalstrict: true */
/* global Components */
/* global mergeObjects */

"use strict";

var EXPORTED_SYMBOLS = ["extractOptions"];

const { utils: Cu } = Components;

Cu.import("resource://tabkit2/jsm/merge.jsm");

function extractOptions(allArguments, defaultOptions) {
  if (typeof defaultOptions === "undefined" || defaultOptions === null) {
    defaultOptions = {};
  }

  var extractedOptions = {};

  // allArguments could be argument variable
  if (!("length" in allArguments)) {
    return defaultOptions;
  }

  var lastArgument = allArguments[allArguments.length - 1];
  // typeof Array is still object
  if (typeof lastArgument !== "object" || Array.isArray(lastArgument)) {
    return defaultOptions;
  }

  return mergeObjects(defaultOptions, lastArgument);
}