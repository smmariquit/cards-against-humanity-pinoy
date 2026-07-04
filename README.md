# Cards Against Humanity: Pinoy Edition (Mobile)

Unofficial mobile party card game inspired by the Cards Against Humanity format, localized for Filipino humor and culture.

> **Not affiliated with Cards Against Humanity LLC.** This is a fan/community project. Card text and branding will be original or appropriately licensed.

## Stack

- Expo SDK 57 + React Native + TypeScript
- Game logic in `src/domain/` (pure TS, no RN imports)
- Screens in `src/screens/`

## Development

```bash
npm install
npm start          # Expo dev server
npm run android
npm run ios        # macOS + Xcode, or Expo Go
npm run web
npx tsc --noEmit   # type check
```

## Project layout

```
src/
├── domain/game/   # deck, rounds, scoring (pure logic)
└── screens/       # React Native UI
```

## Roadmap

- [x] Expo TypeScript scaffold
- [ ] Core deck data model (black / white cards, expansions)
- [ ] Local pass-and-play game loop
- [ ] Pinoy card packs (Tagalog, Taglish: curated, original copy)
- [ ] Dark theme UI, large readable text for party use
- [ ] Share/export custom card packs (optional)

## License

TBD. Game format is inspired by CC-licensed CAH; all original card copy in this repo must be owned or licensed by contributors.
