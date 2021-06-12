import { Utils } from '../../libs'

test("Return array mas de 0 elementos", async () => {
    let filters:any= [
        {
            
            "values": [
                {
                    "id": "MLA1055",
                    "name": "Celulares y Smartphones",
                    "path_from_root": [
                        {
                            "id": "MLA1051",
                            "name": "Celulares y Teléfonos"
                        },
                        {
                            "id": "MLA1055",
                            "name": "Celulares y Smartphones"
                        }
                    ]
                }
            ]
        },
        
    ]
    const result = await Utils.getCategorys(filters)
    expect(result.length).not.toEqual(0);
});

