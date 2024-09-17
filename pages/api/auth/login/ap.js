/* eslint-disable */
import axios from "axios"

export default async (req, res) => {
  if (req.method === "POST") {
    const { data, headers } = await axios.get("/api/auth/csrf", {
      baseURL: `${process.env.URL}`,
    })
    const { csrfToken } = data

    const encodedSAMLBody = encodeURIComponent(JSON.stringify(req.body))

    res.setHeader("set-cookie", headers["set-cookie"] ?? "")
    return res.send(
      `<html>
        <body>
          <form action="/api/auth/callback/ap" method="POST">
            <input type="hidden" name="csrfToken" value="${csrfToken}"/>
            <input type="hidden" name="samlBody" value="${encodedSAMLBody}"/>
          </form>
          <script>
            document.forms[0].submit();
          </script>
        </body>
      </html>`
    )
  }
}
