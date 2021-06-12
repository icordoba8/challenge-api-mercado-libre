import { Utils } from '../../libs'

test("Return Object row emtpy ", async () => {
    const result = await Utils.row([])
    expect(result).toEqual({});
});
test("Return Object row no empy ", async () => {
   const result = await Utils.row([{"item":0}])
    expect(result).not.toEqual({});
});


