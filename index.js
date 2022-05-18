const products = [
    {id: 1, name: "Ajo", isStock: true},
    {id: 2, name: "Papa", isStock: false},
    {id: 3, name: "Zanahoria", isStock: true},
    {id: 4, name: "Tomate", isStock: true},
    {id: 5, name: "Cebolla", isStock: true},
    
]

const App = (
    <div>
    <h2>Listado de productos</h2>
       <ul>
            {
               products.map((product)=>{
                   return (
                       <li key={product.id}>{product.name}</li>
                   )
               })
           }
       </ul>
       <h2>Productos disponibles</h2>
       <ul>            
           {
               products.map(product =>{
                if(product.isStock){
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                }
               })
           }
       </ul>
    </div>
)

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement)