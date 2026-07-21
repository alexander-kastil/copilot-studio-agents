# Prebuilt entities

A `Question` node's `entity:` property names the type of information to extract. Microsoft Learn lists the *display names* ("Date and time") and their variable base types, but never the YAML token, so the catalog below comes from the language server binary (tier 1) cross-checked against Learn for base types.

## Catalog

The YAML token is the bare PascalCase form. Base types are from the Learn web-app table.

| Token | Display name | Base type |
| --- | --- | --- |
| `StringPrebuiltEntity` | User's entire response | String |
| `AgePrebuiltEntity` | Age | Number |
| `BooleanPrebuiltEntity` | Boolean | Boolean |
| `CityPrebuiltEntity` | City | String |
| `ColorPrebuiltEntity` | Color | String |
| `ContinentPrebuiltEntity` | Continent | String |
| `CountryOrRegionPrebuiltEntity` | Country or region | String |
| `DatePrebuiltEntity` | Date | DateTime |
| `DateTimePrebuiltEntity` | Date and time | DateTime |
| `DateTimeNoTimeZonePrebuiltEntity` | Date and time, no time zone | DateTime |
| `DurationPrebuiltEntity` | Duration | String |
| `EmailPrebuiltEntity` | Email | String |
| `EventPrebuiltEntity` | Event | String |
| `FilePrebuiltEntity` | File | Record |
| `LanguagePrebuiltEntity` | Language | String |
| `MoneyPrebuiltEntity` | Money | Number |
| `NumberPrebuiltEntity` | Number | Number |
| `OrdinalPrebuiltEntity` | Ordinal | Number |
| `OrganizationPrebuiltEntity` | Organization | String |
| `PercentagePrebuiltEntity` | Percentage | Number |
| `PersonNamePrebuiltEntity` | Person name | String |
| `PhoneNumberPrebuiltEntity` | Phone number | String |
| `PointOfInterestPrebuiltEntity` | Point of interest | String |
| `SpeedPrebuiltEntity` | Speed | Number |
| `StatePrebuiltEntity` | State | String |
| `StreetAddressPrebuiltEntity` | Street address | String |
| `TemperaturePrebuiltEntity` | Temperature | Number |
| `URLPrebuiltEntity` | URL | String |
| `WeightPrebuiltEntity` | Weight | Number |
| `ZipCodePrebuiltEntity` | Zip code | String |

`NumberPrebuiltEntity` appears in the binary only in its generated visitor forms, not as a bare literal, yet it is used and working in `Travel Agent/topics/BookTrip.mcs.yml` and `HR Buddy/topics/CollectEmployeeData.mcs.yml`. Absence of the bare string in tier 1 is not proof of invalidity; confirm against tier 2 before rejecting a token.

## Choosing between the three date entities

This is the distinction most likely to be gotten wrong, because search results treat the names as interchangeable. They are not.

| Use | Token | Why |
| --- | --- | --- |
| Birth date, start date, due date | `DatePrebuiltEntity` | A calendar date with no time component |
| Appointment slot, meeting time | `DateTimePrebuiltEntity` | Also accepts "at 3pm"; wrong for a birth date |
| Wall-clock time that must not shift per user time zone | `DateTimeNoTimeZonePrebuiltEntity` | Suppresses time-zone normalization |

Repo precedent: `Travel Agent/topics/BookTrip.mcs.yml:31` uses `DatePrebuiltEntity` for a trip date; `Onboarding Agent/topics/UserAccountCreation.mcs.yml` uses it for a birth date.

## Base type is fixed on first assignment

A variable's type locks the first time it takes a value, so an entity choice is also a type decision. Assigning a `DateTime` from `DatePrebuiltEntity` and later trying to store a String into the same variable is an error. Pick the entity for the type you want downstream.

## Beyond prebuilt entities

- **Closed list** entities for small fixed vocabularies, with synonyms and optional smart matching.
- **Regex** entities for tracking IDs, license numbers, and similar patterns. NLU and CLU use .NET regex syntax; NLU+ uses JavaScript syntax. Pattern matching is case sensitive unless the pattern opens with `(?i)`.
- **Open list / dynamic inline** entities populated at runtime from a table variable (cap: 100 entries), for values that vary per user or session.
- **One of multiple entities** on a single node: up to five, only one of each type, no external entities, and only the *first* match in the configured order is returned.
