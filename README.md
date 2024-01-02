# TradeSparkChallange

# Comentarios sobre el funcionamiento

Punto 1: Para el filtrado, ya sea del título, el autor o la categoría, la búsqueda debe ser de forma completa. En caso de que el autor sea Julián Wagner, filtrando solamente por Julián no obtendrás ningún resultado. Decidí implementarlo de esta forma porque podría haber otra autora llamada Julia, y si filtraras por su nombre también te mostraría al autor Julián, ya que coincidiría.

Punto 2 y 3: Decidí crear la posibilidad de modificar cualquier campo del libro, no solo la categoría, ya que era bastante similar y te permite mayor flexibilidad. Además, incluí la opción de eliminar uno de los libros ya creados o de agregar uno nuevo para poder probar de manera correcta el funcionamiento de la app. En los casos en que se desea crear un libro, o modificarle el campo autor o categoría, y el nuevo valor no existe en la base de datos, se debe efectuar la creación en la misma. Por ejemplo, si se quiere crear el libro "Harry Potter y el cáliz de fuego", pero la autora Joanne Rowling aún no se encuentra en la base de datos, se realiza su creación y luego se continúa con la del libro.




## Getting started

### Prerequisites
Docker and docker-compose. for installation instructions see [here](https://docs.docker.com/install/)

#### Make sure that the docker daemon is running.


### Run the challange
1. Clone the repository
2. Run `docker-compose up` in the root directory of the repository
3. enter to localhost:4200 in your browser
4. Your has to see the following screen:
![example image](images/main_screen.png)

