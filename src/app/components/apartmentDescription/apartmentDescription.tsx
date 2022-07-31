import { Typography } from "@mui/material";
import { IApartment } from "app/constants/models";
import { Description, Section } from "./components";

interface ApartmentDescriptionProps {
  children: React.ReactNode;
  apartment: IApartment;
}

export function ApartmentDescription({ apartment, children }: ApartmentDescriptionProps) {
  return (
    <Description>
      {children}
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum quis explicabo
        officiis quos deleniti reprehenderit cum ullam, non, quia animi tempora nam libero?
        Repellendus obcaecati quo a cum? Dolorum? Voluptates recusandae quos quia facere reiciendis
        hic, nobis quaerat perspiciatis vitae dolor amet laboriosam exercitationem adipisci
        incidunt, consequuntur delectus cumque? Vitae aut perferendis ea illum eaque ex, iusto quia
        officiis! Illum et dolore sapiente suscipit eius accusamus, magni voluptatem eum deserunt
        officiis excepturi beatae aut adipisci ullam ex autem dignissimos dolor. Ipsum cumque
        accusantium repellendus, modi doloremque animi vero officiis. Voluptatum ratione sequi iste
        sapiente, est, non quia at dolores neque suscipit sint! Nihil explicabo libero veniam,
        excepturi quisquam architecto nisi labore, ipsum corporis sequi voluptas facilis alias
        recusandae minima! Atque itaque asperiores tempora neque sapiente laboriosam nostrum totam,
        exercitationem necessitatibus dolores et impedit quia! Tempora officiis reiciendis, expedita
        corporis dolor officia, ad eos ducimus numquam alias obcaecati, in explicabo. Cupiditate,
        nesciunt dolorem architecto hic molestias voluptatibus illum voluptates corrupti. Mollitia
        temporibus voluptatem obcaecati quidem dolore, soluta incidunt, officia vitae dignissimos
        expedita recusandae, doloremque officiis impedit reprehenderit voluptatum eaque sapiente!
        Cum, delectus non ut odit a, qui deserunt iure cupiditate dolor earum eligendi et eveniet
        beatae praesentium porro alias sint molestias doloremque ipsa aperiam eaque at, ipsum
        commodi. Nostrum, sint. Inventore, eum dolor? Quam dolor quisquam omnis cupiditate
        consectetur inventore natus magni nesciunt ex at ipsam eum laudantium dolorum, obcaecati
        blanditiis officia debitis nostrum. Id ad saepe at fuga blanditiis? Ut quae fugit
        consequuntur, minus commodi dignissimos odio rem? Ipsam adipisci voluptatibus autem
        voluptatum et laborum, asperiores eius! Optio blanditiis quo libero maxime amet consequuntur
        vel incidunt atque quia assumenda. Quo molestias perspiciatis explicabo eaque reiciendis
        cupiditate voluptate velit voluptatibus nostrum vel blanditiis ad ab omnis recusandae,
        consectetur corporis similique ipsa enim a et tempore architecto sequi beatae tempora?
        Optio. Quasi molestias odio et fugiat excepturi culpa quisquam repellat quibusdam, sit iste
        repellendus totam aliquam similique rerum cum unde, dolore perferendis quae in mollitia.
        Veniam vitae obcaecati autem distinctio velit. Minima alias in architecto excepturi labore
        eaque dolor dolorum magnam possimus dicta! Rem, in saepe magnam accusantium libero fugiat ut
        aliquid numquam fuga sunt excepturi, natus quidem a quod perspiciatis. Aperiam aspernatur
        dolorem libero sequi totam consequatur tempora reiciendis laborum, optio ut eveniet
        pariatur? Dignissimos cupiditate sint ad placeat at repudiandae, totam eius? Hic animi quia
        iure reiciendis. Eum, beatae. Voluptatem incidunt velit ratione atque vero cum nemo! Quaerat
        nisi, odit error quos asperiores, culpa maxime quis quod inventore quibusdam nam delectus
        dicta reprehenderit recusandae voluptatibus velit, nostrum ratione. Accusantium! Iste quae
        non dolorum? Enim asperiores non ea, nihil accusamus, optio, cumque inventore officiis
        tenetur sequi amet omnis eaque? Est voluptates ex pariatur laudantium debitis voluptate
        veritatis fuga totam nihil. Totam, deleniti tenetur. Nulla, veniam ipsam pariatur vero
        molestias voluptates dolorem ipsa magni impedit. Ducimus quasi mollitia quae perspiciatis
        tenetur, qui odit quis quam deserunt facilis, enim rem commodi. Id. Et, corporis. Quasi
        cumque, dolores quibusdam earum reiciendis, cupiditate illo voluptas consequatur dolore
        aperiam necessitatibus explicabo possimus magni laboriosam iste nemo suscipit ipsum illum
        veniam non accusamus eos quidem laborum. Et illum esse consequuntur. Labore nobis minus
        minima amet quis accusantium, quo in nesciunt harum facilis deserunt. Quibusdam natus quidem
        maxime perspiciatis reiciendis nam ad. Recusandae dolorem sunt rerum numquam. Dicta, soluta?
        Ipsa, placeat. Necessitatibus ut esse dolores hic quo voluptate nihil, vel porro labore,
        libero impedit, accusamus id! Cum itaque molestiae iste suscipit veniam? Accusamus dolorem
        perspiciatis labore recusandae? Rerum natus asperiores, dolor quis voluptates quae sit
        tempora. Cupiditate ipsum suscipit id deserunt fugit eius quis deleniti aperiam soluta
        temporibus, provident voluptatem quasi laudantium dolorum! At fuga veniam aut.
      </Section>
    </Description>
  );
}
