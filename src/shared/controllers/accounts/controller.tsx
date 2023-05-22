import { HeaderComponent } from "@/shared/ui/components";
import { ActionButton, ActionLink, Container, LogoImage } from "@/shared/ui/core";

export default function AccountsController() {
    return (<>
        <HeaderComponent />
        <Container justify="center" spacingHeight={24}>
            <LogoImage width={150} height={150} />
        </Container>
        <Container justify="center" gapRow={12}>
            <ActionButton color="primary" text="ADD INCOME" type="button" />
            <ActionButton color="danger" text="ADD EXPENSE" type="button" />
            <ActionLink text="return" href="/auth" />
        </Container>
    </>)

}
