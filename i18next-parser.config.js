module.exports = {
  defaultNamespace: 'translation',
  defaultValue: '',
  indentation: 2,
  locales: ['en', 'pt'],
  output: 'locales/$LOCALE.json',
  input: ['src/ui/**/*.{ts, tsx}'],
}
