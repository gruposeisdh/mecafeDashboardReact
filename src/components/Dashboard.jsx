import morenita from "../images/cafe-molido-morenita.jpg"
import nico from "../images/perfil.png"
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";

/*

<div className="dashboard_card dashboard_cardColor">
    <h4>cantidad de Productos por Gramos</h4>
    
    <div className="gramesContainer">
        <div className="gramesBox">
            <span>250g:</span>
            <p>10</p>
        </div>

        <div className="gramesBox">
            <span>500g:</span>
            <p>15</p>
        </div>

        <div className="gramesBox">
            <span>1000g:</span>
            <p>20</p>
        </div>
    </div>

</div>

*/

function Dashboard() {

    return (

        <div className="containerCenterWeb">

            <div className="generalFormat dashboardGridGeneral">
                
                {/* Tarjetas */}

                <div className="dashboard_cardContainer">

                    <div className="dashboard_card dashboard_cardColor">

                        <div className="cardContainer">
                            <div>
                                <h4>Total de Productos</h4>
                                <p>23</p>
                            </div>
                            <MdOutlineProductionQuantityLimits className="cardIcon"/>
                        </div>

                    </div>

                    <div className="dashboard_card dashboard_cardColor">

                        <div className="cardContainer">
                            <div>
                                <h4>Total de Usuarios</h4>
                                <p>5</p>
                            </div>
                            <AiOutlineUser className="cardIcon"/>
                        </div>

                    </div>

                    <div className="dashboard_card dashboard_cardColor">

                        <div className="cardContainer">
                            <div>
                                <h4>Total Roles de Usuario</h4>
                                <p>2</p>
                            </div>
                            <AiOutlineUserAdd className="cardIcon"/>
                        </div>

                    </div>

                </div>

                {/* Detalle Ultimo Producto Creado */}

                <div className="dashboard_ProductDetail">

                    <div className="ProductTitle">
                        <h6>Cafe la morenita suave</h6>
                    </div>

                    <div className="productImageContainer">
                        <img src={morenita} alt=""/>
                    </div>

                   <div className="productDescriptionContainer">
                        <h6>Descripcion del Producto</h6>
                        <p>Agradable café de sabor suavemente dulce, acidez media y notas frutales. De tostión media y molienda fina, delicado al paladar. Mecafe es disfrutar del mejor cafe, una excelente calidad y el proceso mas natural para cuidar tu salud.</p>
                   </div>

                   <div className="productGramesContainer">
                        <h6>Gramos disponibles:</h6>
                        <ul>
                            <li>250 g</li>
                            <li>500 g</li>
                            <li>1000 g</li>
                        </ul>
                   </div>

                   <div className="productGrindingsContainer">
                        <h6>Moliendas Disponibles:</h6>
                        <ul>
                            <li>Grano</li>
                            <li>Molido Grueso</li>
                            <li>Molido Medio</li>
                            <li>Molido Fino</li>
                            <li>Molido Super Fino</li>
                            <li>Molido Extra Fino</li>
                        </ul>
                   </div>

                </div>

                {/* Detalle Ultimo Usuario Creado */}

                <div className="dashboard_UserDetail">

                    <div className="userTitle">
                        <h6>Ultimo usuario</h6>
                    </div>

                    <div className="userImageContainer">
                        <img src={nico} alt=""/>
                    </div>

                    <div className="userDataContainer">

                        <h6>Datos personales:</h6>

                        <div className="userName">
                            <span>Nombre:</span>
                            <p>Nicolas</p>
                        </div>

                        <div className="userLastName">
                            <span>Apellido:</span>
                            <p>Pirello</p>
                        </div>

                        <div className="userEmail">
                            <span>Email:</span>
                            <p>nicoalepirello@gmail.com</p>
                        </div>

                        <div className="userRol">
                            <span>Rol:</span>
                            <p>Admin</p>
                        </div>

                        <div className="userCountry">
                            <span>Pais:</span>
                            <p>Chile</p>
                        </div>

                        <div className="userCity">
                            <span>Ciudad:</span>
                            <p>Mirasol</p>
                        </div>

                        <div className="userStreet">
                            <span>Calle:</span>
                            <p>Guillermo Lora 325</p>
                        </div>

                    </div>

                </div>

                <div className="dashboard_productsGrinding">

                    <div className="grindingTitle">
                        <h6>Productos por Tipos de Molienda</h6>
                    </div>

                    <div className="productsGrinding__grid">

                        <div className="grindingCard">
                            <h6>En grano:</h6>
                            <p>12 Productos Disponibles</p>
                        </div>

                        <div className="grindingCard">
                            <h6>Molido Grueso:</h6>
                            <p>23 Productos Disponibles</p>
                        </div>

                        <div className="grindingCard">
                            <h6>Molido Medio:</h6>
                            <p>37 Productos Disponibles</p>
                        </div>

                        <div className="grindingCard">
                            <h6>Molido fino:</h6>
                            <p>42 Productos Disponibles</p>
                        </div>

                        <div className="grindingCard">
                            <h6>Molido super fino:</h6>
                            <p>50 Productos Disponibles</p>
                        </div>

                        <div className="grindingCard">
                            <h6>Molido extra fino:</h6>
                            <p>61 Productos Disponibles</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;
