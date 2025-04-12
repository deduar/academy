# Aprendices

/aprendices
* Crear aprendiz (POST /aprendices/)
* Listar aprendices (GET /aprendices/)
* Obtener aprendiz por ID (GET /aprendices/{id})
* Actualizar aprendiz (PUT /aprendices/{id})
* Eliminar aprendiz (DELETE /aprendices/{id})

/cohortes
* Crear cohorte (POST /cohortes/)
* Listar cohortes (GET /cohortes/)
* Obtener cohorte (GET /cohortes/{id})
* Actualizar cohorte (PUT /cohortes/{id})
* Eliminar cohorte (DELETE /cohortes/{id})

/quotas
* Crear cuota manual (POST /cuotas/)
* Listar cuotas (GET /cuotas/)
* Obtener cuota por ID (GET /cuotas/{id})
* Eliminar cuota (DELETE /cuotas/{id})

/pagos
* Registrar pago (POST /pagos/) – también actualiza el estado de la cuota a "pagado"
* Listar pagos (GET /pagos/)
* Obtener pago por ID (GET /pagos/{id})

/crm
/usuarios

# 🧠 ¿Cómo se conecta todo?
* models/ define las tablas.
* schemas/ valida los datos que entran y salen.
*- crud/ implementa las operaciones de base de datos (create, read, update, delete).
* routes/ expone los endpoints (usa los schemas + crud).
* services/ contiene lógica adicional (notificaciones, integración con APIs externas).

