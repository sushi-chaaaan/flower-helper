import type { RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import typia from "typia";
const validateRESTPutAPIApplicationCommandsJSONBody = (() => { const $iv6 = new Set([0, 2, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $iv13 = new Set([0, 2, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $vv26 = new Set([0, 2, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $vv33 = new Set([0, 2, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $io0 = (input: any): boolean => (undefined === input.type || 1 === input.type) && "string" === typeof input.description && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu1(elem))) && (undefined === input.dm_permission || "boolean" === typeof input.dm_permission) && (undefined === input.default_permission || "boolean" === typeof input.default_permission) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && (undefined === input.handler || 1 === input.handler || 2 === input.handler) && (undefined === input.contexts || Array.isArray(input.contexts) && input.contexts.every((elem: any) => 0 === elem || 1 === elem || 2 === elem)) && (null === input.default_member_permissions || undefined === input.default_member_permissions || "string" === typeof input.default_member_permissions) && (undefined === input.integration_types || Array.isArray(input.integration_types) && input.integration_types.every((elem: any) => 0 === elem || 1 === elem)); const $io1 = (input: any): boolean => (null === input.id || undefined === input.id || "string" === typeof input.id) && (null === input["en-US"] || undefined === input["en-US"] || "string" === typeof input["en-US"]) && (null === input["en-GB"] || undefined === input["en-GB"] || "string" === typeof input["en-GB"]) && (null === input.bg || undefined === input.bg || "string" === typeof input.bg) && (null === input["zh-CN"] || undefined === input["zh-CN"] || "string" === typeof input["zh-CN"]) && (null === input["zh-TW"] || undefined === input["zh-TW"] || "string" === typeof input["zh-TW"]) && (null === input.hr || undefined === input.hr || "string" === typeof input.hr) && (null === input.cs || undefined === input.cs || "string" === typeof input.cs) && (null === input.da || undefined === input.da || "string" === typeof input.da) && (null === input.nl || undefined === input.nl || "string" === typeof input.nl) && (null === input.fi || undefined === input.fi || "string" === typeof input.fi) && (null === input.fr || undefined === input.fr || "string" === typeof input.fr) && (null === input.de || undefined === input.de || "string" === typeof input.de) && (null === input.el || undefined === input.el || "string" === typeof input.el) && (null === input.hi || undefined === input.hi || "string" === typeof input.hi) && (null === input.hu || undefined === input.hu || "string" === typeof input.hu) && (null === input.it || undefined === input.it || "string" === typeof input.it) && (null === input.ja || undefined === input.ja || "string" === typeof input.ja) && (null === input.ko || undefined === input.ko || "string" === typeof input.ko) && (null === input.lt || undefined === input.lt || "string" === typeof input.lt) && (null === input.no || undefined === input.no || "string" === typeof input.no) && (null === input.pl || undefined === input.pl || "string" === typeof input.pl) && (null === input["pt-BR"] || undefined === input["pt-BR"] || "string" === typeof input["pt-BR"]) && (null === input.ro || undefined === input.ro || "string" === typeof input.ro) && (null === input.ru || undefined === input.ru || "string" === typeof input.ru) && (null === input["es-ES"] || undefined === input["es-ES"] || "string" === typeof input["es-ES"]) && (null === input["es-419"] || undefined === input["es-419"] || "string" === typeof input["es-419"]) && (null === input["sv-SE"] || undefined === input["sv-SE"] || "string" === typeof input["sv-SE"]) && (null === input.th || undefined === input.th || "string" === typeof input.th) && (null === input.tr || undefined === input.tr || "string" === typeof input.tr) && (null === input.uk || undefined === input.uk || "string" === typeof input.uk) && (null === input.vi || undefined === input.vi || "string" === typeof input.vi); const $io2 = (input: any): boolean => 11 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io3 = (input: any): boolean => 5 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io4 = (input: any): boolean => (undefined === input.channel_types || Array.isArray(input.channel_types) && input.channel_types.every((elem: any) => true === $iv6.has(elem))) && 7 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io5 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 4 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io6 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 4 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))); const $io7 = (input: any): boolean => "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "number" === typeof input.value; const $io8 = (input: any): boolean => 9 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io9 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 10 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io10 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 10 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))); const $io11 = (input: any): boolean => 8 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io12 = (input: any): boolean => (undefined === input.min_length || "number" === typeof input.min_length) && (undefined === input.max_length || "number" === typeof input.max_length) && 3 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io13 = (input: any): boolean => (undefined === input.min_length || "number" === typeof input.min_length) && (undefined === input.max_length || "number" === typeof input.max_length) && 3 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io14(elem))); const $io14 = (input: any): boolean => "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.value; const $io15 = (input: any): boolean => 6 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io16 = (input: any): boolean => (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $io17(elem))) && 2 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io17 = (input: any): boolean => (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu2(elem))) && 1 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io18 = (input: any): boolean => 11 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io19 = (input: any): boolean => 5 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io20 = (input: any): boolean => (undefined === input.channel_types || Array.isArray(input.channel_types) && input.channel_types.every((elem: any) => true === $iv13.has(elem))) && 7 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io21 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 4 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io22 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 4 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))); const $io23 = (input: any): boolean => 9 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io24 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 10 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io25 = (input: any): boolean => (undefined === input.min_value || "number" === typeof input.min_value) && (undefined === input.max_value || "number" === typeof input.max_value) && 10 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io7(elem))); const $io26 = (input: any): boolean => 8 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io27 = (input: any): boolean => (undefined === input.min_length || "number" === typeof input.min_length) && (undefined === input.max_length || "number" === typeof input.max_length) && 3 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && true === input.autocomplete && (undefined === input.choices || Array.isArray(input.choices) && input.choices.length === 0); const $io28 = (input: any): boolean => (undefined === input.min_length || "number" === typeof input.min_length) && (undefined === input.max_length || "number" === typeof input.max_length) && 3 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required) && (undefined === input.autocomplete || false === input.autocomplete) && (undefined === input.choices || Array.isArray(input.choices) && input.choices.every((elem: any) => "object" === typeof elem && null !== elem && $io14(elem))); const $io29 = (input: any): boolean => 6 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io30 = (input: any): boolean => (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu2(elem))) && 1 === input.type && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && "string" === typeof input.description && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.required || "boolean" === typeof input.required); const $io31 = (input: any): boolean => (2 === input.type || 3 === input.type) && "string" === typeof input.name && (null === input.name_localizations || undefined === input.name_localizations || "object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) && $io1(input.name_localizations)) && (null === input.description_localizations || undefined === input.description_localizations || "object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) && $io1(input.description_localizations)) && (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu1(elem))) && (undefined === input.dm_permission || "boolean" === typeof input.dm_permission) && (undefined === input.default_permission || "boolean" === typeof input.default_permission) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && (undefined === input.handler || 1 === input.handler || 2 === input.handler) && (undefined === input.contexts || Array.isArray(input.contexts) && input.contexts.every((elem: any) => 0 === elem || 1 === elem || 2 === elem)) && (null === input.default_member_permissions || undefined === input.default_member_permissions || "string" === typeof input.default_member_permissions) && (undefined === input.integration_types || Array.isArray(input.integration_types) && input.integration_types.every((elem: any) => 0 === elem || 1 === elem)); const $iu0 = (input: any): any => (() => {
    if (undefined !== input.description)
        return $io0(input);
    else if (2 === input.type || 3 === input.type)
        return $io31(input);
    else
        return false;
})(); const $iu1 = (input: any): any => (() => {
    if (5 === input.type)
        return $io3(input);
    else if (11 === input.type)
        return $io2(input);
    else if (7 === input.type)
        return $io4(input);
    else if (6 === input.type)
        return $io15(input);
    else if (8 === input.type)
        return $io11(input);
    else if (9 === input.type)
        return $io8(input);
    else if (1 === input.type)
        return $io30(input);
    else if (2 === input.type)
        return $io16(input);
    else
        return (() => {
            if ($io10(input))
                return $io10(input);
            if ($io9(input))
                return $io9(input);
            if ($io6(input))
                return $io6(input);
            if ($io5(input))
                return $io5(input);
            if ($io13(input))
                return $io13(input);
            if ($io12(input))
                return $io12(input);
            return false;
        })();
})(); const $iu2 = (input: any): any => (() => {
    if (5 === input.type)
        return $io19(input);
    else if (11 === input.type)
        return $io18(input);
    else if (7 === input.type)
        return $io20(input);
    else if (6 === input.type)
        return $io29(input);
    else if (8 === input.type)
        return $io26(input);
    else if (9 === input.type)
        return $io23(input);
    else
        return (() => {
            if ($io25(input))
                return $io25(input);
            if ($io24(input))
                return $io24(input);
            if ($io22(input))
                return $io22(input);
            if ($io21(input))
                return $io21(input);
            if ($io28(input))
                return $io28(input);
            if ($io27(input))
                return $io27(input);
            return false;
        })();
})(); const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.type || 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | undefined)",
        value: input.type
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOption>> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index22: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index22 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandGroupOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>)",
        value: elem
    })) && $vu1(elem, _path + ".options[" + _index22 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index22 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandGroupOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOption>> | undefined)",
        value: input.options
    }), undefined === input.dm_permission || "boolean" === typeof input.dm_permission || $report(_exceptionable, {
        path: _path + ".dm_permission",
        expected: "(boolean | undefined)",
        value: input.dm_permission
    }), undefined === input.default_permission || "boolean" === typeof input.default_permission || $report(_exceptionable, {
        path: _path + ".default_permission",
        expected: "(boolean | undefined)",
        value: input.default_permission
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), undefined === input.handler || 1 === input.handler || 2 === input.handler || $report(_exceptionable, {
        path: _path + ".handler",
        expected: "(1 | 2 | undefined)",
        value: input.handler
    }), undefined === input.contexts || (Array.isArray(input.contexts) || $report(_exceptionable, {
        path: _path + ".contexts",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<InteractionContextType>> | undefined)",
        value: input.contexts
    })) && input.contexts.map((elem: any, _index23: number) => 0 === elem || 1 === elem || 2 === elem || $report(_exceptionable, {
        path: _path + ".contexts[" + _index23 + "]",
        expected: "(0 | 1 | 2)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".contexts",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<InteractionContextType>> | undefined)",
        value: input.contexts
    }), null === input.default_member_permissions || undefined === input.default_member_permissions || "string" === typeof input.default_member_permissions || $report(_exceptionable, {
        path: _path + ".default_member_permissions",
        expected: "(null | string | undefined)",
        value: input.default_member_permissions
    }), undefined === input.integration_types || (Array.isArray(input.integration_types) || $report(_exceptionable, {
        path: _path + ".integration_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ApplicationIntegrationType>> | undefined)",
        value: input.integration_types
    })) && input.integration_types.map((elem: any, _index24: number) => 0 === elem || 1 === elem || $report(_exceptionable, {
        path: _path + ".integration_types[" + _index24 + "]",
        expected: "(0 | 1)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".integration_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ApplicationIntegrationType>> | undefined)",
        value: input.integration_types
    })].every((flag: boolean) => flag); const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.id || undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "(null | string | undefined)",
        value: input.id
    }), null === input["en-US"] || undefined === input["en-US"] || "string" === typeof input["en-US"] || $report(_exceptionable, {
        path: _path + "[\"en-US\"]",
        expected: "(null | string | undefined)",
        value: input["en-US"]
    }), null === input["en-GB"] || undefined === input["en-GB"] || "string" === typeof input["en-GB"] || $report(_exceptionable, {
        path: _path + "[\"en-GB\"]",
        expected: "(null | string | undefined)",
        value: input["en-GB"]
    }), null === input.bg || undefined === input.bg || "string" === typeof input.bg || $report(_exceptionable, {
        path: _path + ".bg",
        expected: "(null | string | undefined)",
        value: input.bg
    }), null === input["zh-CN"] || undefined === input["zh-CN"] || "string" === typeof input["zh-CN"] || $report(_exceptionable, {
        path: _path + "[\"zh-CN\"]",
        expected: "(null | string | undefined)",
        value: input["zh-CN"]
    }), null === input["zh-TW"] || undefined === input["zh-TW"] || "string" === typeof input["zh-TW"] || $report(_exceptionable, {
        path: _path + "[\"zh-TW\"]",
        expected: "(null | string | undefined)",
        value: input["zh-TW"]
    }), null === input.hr || undefined === input.hr || "string" === typeof input.hr || $report(_exceptionable, {
        path: _path + ".hr",
        expected: "(null | string | undefined)",
        value: input.hr
    }), null === input.cs || undefined === input.cs || "string" === typeof input.cs || $report(_exceptionable, {
        path: _path + ".cs",
        expected: "(null | string | undefined)",
        value: input.cs
    }), null === input.da || undefined === input.da || "string" === typeof input.da || $report(_exceptionable, {
        path: _path + ".da",
        expected: "(null | string | undefined)",
        value: input.da
    }), null === input.nl || undefined === input.nl || "string" === typeof input.nl || $report(_exceptionable, {
        path: _path + ".nl",
        expected: "(null | string | undefined)",
        value: input.nl
    }), null === input.fi || undefined === input.fi || "string" === typeof input.fi || $report(_exceptionable, {
        path: _path + ".fi",
        expected: "(null | string | undefined)",
        value: input.fi
    }), null === input.fr || undefined === input.fr || "string" === typeof input.fr || $report(_exceptionable, {
        path: _path + ".fr",
        expected: "(null | string | undefined)",
        value: input.fr
    }), null === input.de || undefined === input.de || "string" === typeof input.de || $report(_exceptionable, {
        path: _path + ".de",
        expected: "(null | string | undefined)",
        value: input.de
    }), null === input.el || undefined === input.el || "string" === typeof input.el || $report(_exceptionable, {
        path: _path + ".el",
        expected: "(null | string | undefined)",
        value: input.el
    }), null === input.hi || undefined === input.hi || "string" === typeof input.hi || $report(_exceptionable, {
        path: _path + ".hi",
        expected: "(null | string | undefined)",
        value: input.hi
    }), null === input.hu || undefined === input.hu || "string" === typeof input.hu || $report(_exceptionable, {
        path: _path + ".hu",
        expected: "(null | string | undefined)",
        value: input.hu
    }), null === input.it || undefined === input.it || "string" === typeof input.it || $report(_exceptionable, {
        path: _path + ".it",
        expected: "(null | string | undefined)",
        value: input.it
    }), null === input.ja || undefined === input.ja || "string" === typeof input.ja || $report(_exceptionable, {
        path: _path + ".ja",
        expected: "(null | string | undefined)",
        value: input.ja
    }), null === input.ko || undefined === input.ko || "string" === typeof input.ko || $report(_exceptionable, {
        path: _path + ".ko",
        expected: "(null | string | undefined)",
        value: input.ko
    }), null === input.lt || undefined === input.lt || "string" === typeof input.lt || $report(_exceptionable, {
        path: _path + ".lt",
        expected: "(null | string | undefined)",
        value: input.lt
    }), null === input.no || undefined === input.no || "string" === typeof input.no || $report(_exceptionable, {
        path: _path + ".no",
        expected: "(null | string | undefined)",
        value: input.no
    }), null === input.pl || undefined === input.pl || "string" === typeof input.pl || $report(_exceptionable, {
        path: _path + ".pl",
        expected: "(null | string | undefined)",
        value: input.pl
    }), null === input["pt-BR"] || undefined === input["pt-BR"] || "string" === typeof input["pt-BR"] || $report(_exceptionable, {
        path: _path + "[\"pt-BR\"]",
        expected: "(null | string | undefined)",
        value: input["pt-BR"]
    }), null === input.ro || undefined === input.ro || "string" === typeof input.ro || $report(_exceptionable, {
        path: _path + ".ro",
        expected: "(null | string | undefined)",
        value: input.ro
    }), null === input.ru || undefined === input.ru || "string" === typeof input.ru || $report(_exceptionable, {
        path: _path + ".ru",
        expected: "(null | string | undefined)",
        value: input.ru
    }), null === input["es-ES"] || undefined === input["es-ES"] || "string" === typeof input["es-ES"] || $report(_exceptionable, {
        path: _path + "[\"es-ES\"]",
        expected: "(null | string | undefined)",
        value: input["es-ES"]
    }), null === input["es-419"] || undefined === input["es-419"] || "string" === typeof input["es-419"] || $report(_exceptionable, {
        path: _path + "[\"es-419\"]",
        expected: "(null | string | undefined)",
        value: input["es-419"]
    }), null === input["sv-SE"] || undefined === input["sv-SE"] || "string" === typeof input["sv-SE"] || $report(_exceptionable, {
        path: _path + "[\"sv-SE\"]",
        expected: "(null | string | undefined)",
        value: input["sv-SE"]
    }), null === input.th || undefined === input.th || "string" === typeof input.th || $report(_exceptionable, {
        path: _path + ".th",
        expected: "(null | string | undefined)",
        value: input.th
    }), null === input.tr || undefined === input.tr || "string" === typeof input.tr || $report(_exceptionable, {
        path: _path + ".tr",
        expected: "(null | string | undefined)",
        value: input.tr
    }), null === input.uk || undefined === input.uk || "string" === typeof input.uk || $report(_exceptionable, {
        path: _path + ".uk",
        expected: "(null | string | undefined)",
        value: input.uk
    }), null === input.vi || undefined === input.vi || "string" === typeof input.vi || $report(_exceptionable, {
        path: _path + ".vi",
        expected: "(null | string | undefined)",
        value: input.vi
    })].every((flag: boolean) => flag); const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [11 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "11",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.channel_types || (Array.isArray(input.channel_types) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ChannelType.GuildText | ChannelType.GuildVoice | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.AnnouncementThread | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia>> | undefined)",
        value: input.channel_types
    })) && input.channel_types.map((elem: any, _index25: number) => true === $vv26.has(elem) || $report(_exceptionable, {
        path: _path + ".channel_types[" + _index25 + "]",
        expected: "(0 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 4 | 5)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ChannelType.GuildText | ChannelType.GuildVoice | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.AnnouncementThread | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia>> | undefined)",
        value: input.channel_types
    }), 7 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "7",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo6 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index27: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index27 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })) && $vo7(elem, _path + ".choices[" + _index27 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index27 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo7 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "number" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "number",
        value: input.value
    })].every((flag: boolean) => flag); const $vo8 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [9 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "9",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo9 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 10 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "10",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo10 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 10 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "10",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index28: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index28 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })) && $vo7(elem, _path + ".choices[" + _index28 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index28 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo11 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "8",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo12 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_length || "number" === typeof input.min_length || $report(_exceptionable, {
        path: _path + ".min_length",
        expected: "(number | undefined)",
        value: input.min_length
    }), undefined === input.max_length || "number" === typeof input.max_length || $report(_exceptionable, {
        path: _path + ".max_length",
        expected: "(number | undefined)",
        value: input.max_length
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo13 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_length || "number" === typeof input.min_length || $report(_exceptionable, {
        path: _path + ".min_length",
        expected: "(number | undefined)",
        value: input.min_length
    }), undefined === input.max_length || "number" === typeof input.max_length || $report(_exceptionable, {
        path: _path + ".max_length",
        expected: "(number | undefined)",
        value: input.max_length
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index29: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index29 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>",
        value: elem
    })) && $vo14(elem, _path + ".choices[" + _index29 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index29 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo14 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo15 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [6 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "6",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo16 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index30: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index30 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>",
        value: elem
    })) && $vo17(elem, _path + ".options[" + _index30 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index30 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>> | undefined)",
        value: input.options
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo17 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBasicOption>> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index31: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index31 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>.o1)",
        value: elem
    })) && $vu2(elem, _path + ".options[" + _index31 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index31 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>.o1)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBasicOption>> | undefined)",
        value: input.options
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo18 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [11 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "11",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo19 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo20 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.channel_types || (Array.isArray(input.channel_types) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ChannelType.GuildText | ChannelType.GuildVoice | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.AnnouncementThread | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia>> | undefined)",
        value: input.channel_types
    })) && input.channel_types.map((elem: any, _index32: number) => true === $vv33.has(elem) || $report(_exceptionable, {
        path: _path + ".channel_types[" + _index32 + "]",
        expected: "(0 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 4 | 5)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ChannelType.GuildText | ChannelType.GuildVoice | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.AnnouncementThread | ChannelType.PublicThread | ChannelType.PrivateThread | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia>> | undefined)",
        value: input.channel_types
    }), 7 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "7",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo21 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo22 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index34: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index34 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })) && $vo7(elem, _path + ".choices[" + _index34 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index34 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo23 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [9 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "9",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo24 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 10 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "10",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo25 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_value || "number" === typeof input.min_value || $report(_exceptionable, {
        path: _path + ".min_value",
        expected: "(number | undefined)",
        value: input.min_value
    }), undefined === input.max_value || "number" === typeof input.max_value || $report(_exceptionable, {
        path: _path + ".max_value",
        expected: "(number | undefined)",
        value: input.max_value
    }), 10 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "10",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index35: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index35 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })) && $vo7(elem, _path + ".choices[" + _index35 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index35 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<number>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo26 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "8",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo27 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_length || "number" === typeof input.min_length || $report(_exceptionable, {
        path: _path + ".min_length",
        expected: "(number | undefined)",
        value: input.min_length
    }), undefined === input.max_length || "number" === typeof input.max_length || $report(_exceptionable, {
        path: _path + ".max_length",
        expected: "(number | undefined)",
        value: input.max_length
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), true === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "true",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })) && ((input.choices.length === 0 || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "[]",
        value: input.choices
    })) && [].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "([] | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo28 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.min_length || "number" === typeof input.min_length || $report(_exceptionable, {
        path: _path + ".min_length",
        expected: "(number | undefined)",
        value: input.min_length
    }), undefined === input.max_length || "number" === typeof input.max_length || $report(_exceptionable, {
        path: _path + ".max_length",
        expected: "(number | undefined)",
        value: input.max_length
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    }), undefined === input.autocomplete || false === input.autocomplete || $report(_exceptionable, {
        path: _path + ".autocomplete",
        expected: "(false | undefined)",
        value: input.autocomplete
    }), undefined === input.choices || (Array.isArray(input.choices) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>> | undefined)",
        value: input.choices
    })) && input.choices.map((elem: any, _index36: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".choices[" + _index36 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>",
        value: elem
    })) && $vo14(elem, _path + ".choices[" + _index36 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".choices[" + _index36 + "]",
        expected: "AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".choices",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOptionChoice<string>>> | undefined)",
        value: input.choices
    })].every((flag: boolean) => flag); const $vo29 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [6 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "6",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo30 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBasicOption>> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index37: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index37 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>.o1)",
        value: elem
    })) && $vu2(elem, _path + ".options[" + _index37 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index37 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>.o1)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBasicOption>> | undefined)",
        value: input.options
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.required || "boolean" === typeof input.required || $report(_exceptionable, {
        path: _path + ".required",
        expected: "(boolean | undefined)",
        value: input.required
    })].every((flag: boolean) => flag); const $vo31 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [2 === input.type || 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(2 | 3)",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.name_localizations || undefined === input.name_localizations || ("object" === typeof input.name_localizations && null !== input.name_localizations && false === Array.isArray(input.name_localizations) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    })) && $vo1(input.name_localizations, _path + ".name_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".name_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.name_localizations
    }), null === input.description_localizations || undefined === input.description_localizations || ("object" === typeof input.description_localizations && null !== input.description_localizations && false === Array.isArray(input.description_localizations) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    })) && $vo1(input.description_localizations, _path + ".description_localizations", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".description_localizations",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Partial<Record<\"id\" | \"en-US\" | \"en-GB\" | \"bg\" | \"zh-CN\" | \"zh-TW\" | \"hr\" | \"cs\" | \"da\" | \"nl\" | \"fi\" | \"fr\" | \"de\" | \"el\" | \"hi\" | \"hu\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | ... 6 more ... | \"vi\", string | null>>> | null | undefined)",
        value: input.description_localizations
    }), undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOption>> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index38: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index38 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandGroupOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>)",
        value: elem
    })) && $vu1(elem, _path + ".options[" + _index38 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index38 + "]",
        expected: "(AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandAttachmentOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandBooleanOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandChannelOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandIntegerOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandMentionableOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandNumberOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<number>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandRoleOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete: true; choices?: [] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandStringOptionBase & { autocomplete?: false | undefined; choices?: APIApplicationCommandOptionChoice<string>[] | undefined; }> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandGroupOption> | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandSubcommandOption>.o1 | AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandUserOption>)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<APIApplicationCommandOption>> | undefined)",
        value: input.options
    }), undefined === input.dm_permission || "boolean" === typeof input.dm_permission || $report(_exceptionable, {
        path: _path + ".dm_permission",
        expected: "(boolean | undefined)",
        value: input.dm_permission
    }), undefined === input.default_permission || "boolean" === typeof input.default_permission || $report(_exceptionable, {
        path: _path + ".default_permission",
        expected: "(boolean | undefined)",
        value: input.default_permission
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), undefined === input.handler || 1 === input.handler || 2 === input.handler || $report(_exceptionable, {
        path: _path + ".handler",
        expected: "(1 | 2 | undefined)",
        value: input.handler
    }), undefined === input.contexts || (Array.isArray(input.contexts) || $report(_exceptionable, {
        path: _path + ".contexts",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<InteractionContextType>> | undefined)",
        value: input.contexts
    })) && input.contexts.map((elem: any, _index39: number) => 0 === elem || 1 === elem || 2 === elem || $report(_exceptionable, {
        path: _path + ".contexts[" + _index39 + "]",
        expected: "(0 | 1 | 2)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".contexts",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<InteractionContextType>> | undefined)",
        value: input.contexts
    }), null === input.default_member_permissions || undefined === input.default_member_permissions || "string" === typeof input.default_member_permissions || $report(_exceptionable, {
        path: _path + ".default_member_permissions",
        expected: "(null | string | undefined)",
        value: input.default_member_permissions
    }), undefined === input.integration_types || (Array.isArray(input.integration_types) || $report(_exceptionable, {
        path: _path + ".integration_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ApplicationIntegrationType>> | undefined)",
        value: input.integration_types
    })) && input.integration_types.map((elem: any, _index40: number) => 0 === elem || 1 === elem || $report(_exceptionable, {
        path: _path + ".integration_types[" + _index40 + "]",
        expected: "(0 | 1)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".integration_types",
        expected: "(Array<AddUndefinedToPossiblyUndefinedPropertiesOfInterface<ApplicationIntegrationType>> | undefined)",
        value: input.integration_types
    })].every((flag: boolean) => flag); const $vu0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (undefined !== input.description)
        return $vo0(input, _path, true && _exceptionable);
    else if (2 === input.type || 3 === input.type)
        return $vo31(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody)",
            value: input
        });
})(); const $vu1 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (5 === input.type)
        return $vo3(input, _path, true && _exceptionable);
    else if (11 === input.type)
        return $vo2(input, _path, true && _exceptionable);
    else if (7 === input.type)
        return $vo4(input, _path, true && _exceptionable);
    else if (6 === input.type)
        return $vo15(input, _path, true && _exceptionable);
    else if (8 === input.type)
        return $vo11(input, _path, true && _exceptionable);
    else if (9 === input.type)
        return $vo8(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo30(input, _path, true && _exceptionable);
    else if (2 === input.type)
        return $vo16(input, _path, true && _exceptionable);
    else
        return $vo10(input, _path, false && _exceptionable) || $vo9(input, _path, false && _exceptionable) || $vo6(input, _path, false && _exceptionable) || $vo5(input, _path, false && _exceptionable) || $vo13(input, _path, false && _exceptionable) || $vo12(input, _path, false && _exceptionable);
})(); const $vu2 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (5 === input.type)
        return $vo19(input, _path, true && _exceptionable);
    else if (11 === input.type)
        return $vo18(input, _path, true && _exceptionable);
    else if (7 === input.type)
        return $vo20(input, _path, true && _exceptionable);
    else if (6 === input.type)
        return $vo29(input, _path, true && _exceptionable);
    else if (8 === input.type)
        return $vo26(input, _path, true && _exceptionable);
    else if (9 === input.type)
        return $vo23(input, _path, true && _exceptionable);
    else
        return $vo25(input, _path, false && _exceptionable) || $vo24(input, _path, false && _exceptionable) || $vo22(input, _path, false && _exceptionable) || $vo21(input, _path, false && _exceptionable) || $vo28(input, _path, false && _exceptionable) || $vo27(input, _path, false && _exceptionable);
})(); const __is = (input: any): input is RESTPutAPIApplicationCommandsJSONBody => Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)); let errors: any; let $report: any; return (input: any): typia.IValidation<RESTPutAPIApplicationCommandsJSONBody> => {
    if (false === __is(input)) {
        errors = [];
        $report = (typia.createValidate as any).report(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "RESTPutAPIApplicationCommandsJSONBody",
            value: input
        })) && input.map((elem: any, _index21: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index21 + "]",
            expected: "(RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index21 + "]", true) || $report(true, {
            path: _path + "[" + _index21 + "]",
            expected: "(RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "RESTPutAPIApplicationCommandsJSONBody",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined
        } as any;
    }
    return {
        success: true,
        errors: [],
        data: input
    } as any;
}; })();
export { validateRESTPutAPIApplicationCommandsJSONBody };
