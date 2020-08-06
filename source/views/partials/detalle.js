
    <main>

        <!-- Tipo de producto -->
        <div class="tipo_producto"><p><%= product_type %></p></div>

        <section class="producto_container">

            <!--Imagen-->
            <div class="imagen_detalle"><img class="img_detalle" src="img/portal_gun.png" alt=""></div>

            <!--Descripcion del producto-->
            <div class="descripcion_detalle">
                <p class="subtitulo_detalle">Descripcion del producto</p>
                <p class="texto_detalle"><%= product_description %></p>
            </div>
            <!--Resumen-->
            <div class="resumen_detalle">
                <div class="cantidad_detalle">
                    <label for="quantity">Cantidad</label>
                    <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <!-- Precio -->
                <div class="precio_detalle"><i class="fas fa-dollar-sign"></i><%= product_price %></div></div>

                <!-- Comprar -->
                <div class="comprar_detalle">Comprar <i class="fas fa-shopping-cart"></i></div>

                <!-- Compartir -->
                <div class="compartir_detalle">Compartir <i class="fas fa-share-alt"></i></div>
            </div>
        </section>
       
    </main>