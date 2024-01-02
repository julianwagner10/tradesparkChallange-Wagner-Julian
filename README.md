# TradeSparkChallange

# Comentarios sobre el funcionamiento

Punto 1: Para el filtrado, ya sea del título, el autor o la categoría, la búsqueda debe ser de forma completa. En caso de que el autor sea Julián Wagner, filtrando solamente por Julián no vas a obtener nada. Decidí implementarlo de esta forma porque sino podría haber otra autora llamada Julia, y si filtraras por su nombre también te mostraría Julián, ya que coincidiría.

Punto 2 y 3: Decidí crear la posibilidad de modificar cualquier campo del libro, no solo la categoría, ya que era bastante similar y te permite mayor flexibilidad. Además, incluí la opción de eliminar uno de los libros ya creados o de agregar uno nuevo para poder probar de manera correcta el funcionamiento de la app.



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

