import GameWindow from "../components/GameWindow";
import BaseLayout from "../components/hocs/Layout"

const Index = () => {
  return (
    <BaseLayout>
      <div className="pt-8">
        <GameWindow />
      </div>
    </BaseLayout>
  )
}

export default Index;