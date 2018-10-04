flattenAprox = (array2D) => {
    let output = [];
    let findCatego;
    for(let i = 0; i < array2D.length; i++){
        for(let j = 0; j < array2D[i].length; j++){
            findCatego = output.find(obj => array2D[i][j].category === obj.category);

            if(findCatego){
                findCatego.movies.push(array2D[i][j].title)
            }
            else{
                output.push({   
                    category: array2D[i][j].category,
                    movies: [array2D[i][j].title]    
                }) 
            }
        }
    }
    return output;
}

//sortie

    // [
    //     {
    //         category: 'Science fiction',
    //         movies: ['StarWars', 'Interstellar']
    //     }
    // ]

const movies = 
    [
        [
            {
                title: 'StarWars',
                category: 'Science fiction'
            },
            {
                title: 'Lapin crétin',
                category: 'animé'
            }
        ],
        [
            {
                title: 'Interstellar',
                category: 'Science fiction'
            },
        ],
        [
            {
                title: 'Simpson',
                category: 'animé'
            }
        ]
    ]

    console.log(flattenAprox(movies))



