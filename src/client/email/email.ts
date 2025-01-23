import mjml2html from 'mjml';

const email_template = `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Подтверждение сообщения</mj-text>

            <mj-divider border-color="#F45E43"></mj-divider>

            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
            <mj-button href="http://localhost:3000/authorization"></mj-button>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
`

export const {html} = mjml2html(email_template)

console.log(html)