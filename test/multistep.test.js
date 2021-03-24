const s = require('superstruct')
const {multistep, packageV1, packageV2} = require('../structures/multistep')

describe('Dimension structure', () => {
  test('Success: Mulstistep structure', () => {
    expect(s.is([
      "2", "100", "100", "100", "10", "", "no", "", "", "0",
      "EG2103CF36-A", "35 RUE DE CALAIS", "67100", "STRASBOURG", "France", "FR", "48.5252,7.7824", "Europe/Paris", "test1", "test1", "test1@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00",
      "EG2103CF36-B", "14 RUE GORGE DE LOUP", "69009", "LYON", "France", "FR", "45.77,4.8041", "Europe/Paris", "test2", "test2", "test2@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00"
    ], multistep())).toBeTruthy()
  })

  test('Success: Mulstistep structure with 2 products', () => {
    expect(s.is([
      "2", "100", "100", "100", "10", "", "no", "", "", "0",
      "EG2103CF36-A", "35 RUE DE CALAIS", "67100", "STRASBOURG", "France", "FR", "48.5252,7.7824", "Europe/Paris", "test1", "test1", "test1@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00",
      "EG2103CF36-B", "14 RUE GORGE DE LOUP", "69009", "LYON", "France", "FR", "45.77,4.8041", "Europe/Paris", "test2", "test2", "test2@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00",
      "2", "100", "100", "100", "10", "", "no", "", "", "0",
      "EG2103CF36-A", "35 RUE DE CALAIS", "67100", "STRASBOURG", "France", "FR", "48.5252,7.7824", "Europe/Paris", "test1", "test1", "test1@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00",
      "EG2103CF36-B", "14 RUE GORGE DE LOUP", "69009", "LYON", "France", "FR", "45.77,4.8041", "Europe/Paris", "test2", "test2", "test2@test.fr", "090809080908", "2021-03-01T01:00:00","2021-03-01T01:00:00"
    ], multistep())).toBeTruthy()
  })

  test('Failed: Mulstistep structure (missing a package field)', () => {
    expect(s.is([
      "2", "100", "100", "10", "", "no", "", "", "0",
      "EG2103CF36-A", "35 RUE DE CALAIS", "67100", "STRASBOURG", "France", "FR", "48.5252,7.7824", "Europe/Paris", "test1", "test1", "test1@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00",
      "EG2103CF36-B", "14 RUE GORGE DE LOUP", "69009", "LYON", "France", "FR", "45.77,4.8041", "Europe/Paris", "test2", "test2", "test2@test.fr", "090809080908", "2021-03-01T01:00:00", "2021-03-01T01:00:00"
    ], multistep())).toBeFalsy()
  })

  test('Success: package v1 structure', () => {
    expect(s.is([
      "1", "100", "120", "120","5", "no"
    ], packageV1)).toBeTruthy()
  })

  test('Failed: package v1 structure', () => {
    expect(s.is([
      "1", "no"
    ], packageV1)).toBeFalsy()
  })

  test('Success: package v2 structure', () => {
    expect(s.is([
      "1", "100", "120", "120","5", "no", "TOXIC LIQUID", "100", "Premium Inurance"
    ], packageV2)).toBeTruthy()
  })

  test('Failed: package v2 structure', () => {
    expect(s.is([
      "1", "100", "120", "120","5", "no"
    ], packageV2)).toBeFalsy()
  })
})

