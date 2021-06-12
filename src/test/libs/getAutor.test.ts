import { Utils } from '../../libs'
let cookies: any = {
    autor: "{\"name\":\"nombre de prueba\",\"lastname\":\"apellidos de prueba\"}"
}
test("Return Object autor emtpy ", async () => {
    const result = await Utils.getAutor({})
    expect(result).toEqual(expect.not.objectContaining(JSON.parse(cookies.autor)));
});
test("Return Object autor no empy ", async () => {
    const result = await Utils.getAutor(cookies)
    expect(result).toEqual(expect.objectContaining(JSON.parse(cookies.autor)));
});


