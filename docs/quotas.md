
## cuotas 
class Cuota {
&nbsp;+int id
&nbsp;+int aprendiz_id
&nbsp;+int cohorte_id
&nbsp;+float monto
&nbsp;+date fecha_emision
&nbsp;+date fecha_vencimiento
&nbsp;+string estado
}

class GenerarCuotasRequest(BaseModel):
&nbsp;mes: int
&nbsp;anio: int
&nbsp;monto: float

class CuotaCreate(BaseModel):
&nbsp;aprendiz_id: int
&nbsp;mes: int
&nbsp;anio: int
&nbsp;monto: float
&nbsp;estado: str = "pendiente"

class CuotaResponse(CuotaCreate):
&nbsp;id: int
&nbsp;class Config:
&nbsp;&nbsp;orm_mode = True

class PagoCreate(BaseModel):
&nbsp;cuota_id: int
&nbsp;fecha_pago: date
&nbsp;monto: float
&nbsp;metodo_pago: str

class PagoResponse(PagoCreate):
&nbsp;id: int
&nbsp;class Config:
&nbsp;&nbsp;orm_mode = True

