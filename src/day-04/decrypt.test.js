import decrypt from './decrypt'

test('it decrypts `qzmt-zixmtkozy-ivhz-343` as `very encrypted name`', () => {
  expect(decrypt(`qzmt-zixmtkozy-ivhz-343`)).toEqual('very encrypted name')
})
