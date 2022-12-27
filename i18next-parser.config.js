module.exports = {
  defaultNamespace: 'translation',
  defaultValue: '',
  indentation: 2,
  locales: ['en-US', 'pt-BR'],
  output: 'locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts, tsx}'],
}
