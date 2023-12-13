import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>GIlberto Garcia</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      gilbertogjn
    </Paragrafo>
  </aside>
)

export default Sidebar
