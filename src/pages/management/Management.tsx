import { Card } from '../../components/card/Card'





export const Management = () => {
  return (
    <section className="py-1 px-3">
      <div className="title mb-4">
        <h3 className='title-color'>Gestão geral</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <Card url={"/panel/services"} title={'Serviços'} text={'Difina os serviços que o hospital oferece.'} />
        </div>
        <div className="col-4">
          <Card url={"/panel/hours"} title={'Horários'} text={'Difina os horários dos médicos.'} />
        </div>
      </div>
    </section>
  )
}
