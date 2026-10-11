# Thiết lập WebDAV trên Cloudflare

### WebDAV

{% stepper %}
{% step %}
### Yêu cầu chuẩn bị:&#x20;

Bạn cần đăng ký một tài khoản Cloudflare
{% endstep %}

{% step %}
### Kích hoạt R2

1. Vào [https://dash.cloudflare.com/cde4cec05bc9e288705067620b6a7fcf/r2/plans](https://dash.cloudflare.com/cde4cec05bc9e288705067620b6a7fcf/r2/plans)
2.  Chọn <mark style="color:$primary;">**Add R2 subscription to my account**</mark> và điền các thông tin liên quan



    <figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 15.34.57.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Cấu hình Cloudflare

1.  Vào **Cloudflare Dashboard,** mục **R2** và **tạo một Bucket mới** (**ví dụ: vbook-backup-bucket)**: [https://dash.cloudflare.com/08a1ed706f082c8a00f1918888d0585b/r2/overview](https://dash.cloudflare.com/08a1ed706f082c8a00f1918888d0585b/r2/overview)



    <figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 15.48.33.png" alt=""><figcaption></figcaption></figure>
2.  Vào **Workers & Pages > KV** và tạo một Namespace mới (ví dụ: USER\_KV). **Copy ID của Namespace đó.**\
    [https://dash.cloudflare.com/08a1ed706f082c8a00f1918888d0585b/workers/kv/namespaces](https://dash.cloudflare.com/08a1ed706f082c8a00f1918888d0585b/workers/kv/namespaces)



    <figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 15.51.45.png" alt=""><figcaption></figcaption></figure>



    <figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 15.59.37.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Cài đặt dự án

* Cài Node

{% code overflow="wrap" collapsedlinecount="10" %}
```
node -v
npm -v
```
{% endcode %}

* Cài Wrangler CLI

{% code overflow="wrap" collapsedlinecount="10" %}
```
npm install -g wrangler
```
{% endcode %}

* Tải dự án về máy tính của bạn

{% code overflow="wrap" collapsedlinecount="10" %}
```
git clone https://github.com/kychitoge/vbook-webdav.git
cd vbook-webdav
npm install
```
{% endcode %}
{% endstep %}

{% step %}
### Cấu hình Biến môi trường

Đổi tên file `wrangler.example.jsonc` thành `wrangler.jsonc` ở thư mục gốc và cập nhật thông tin của bạn

<figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 16.06.47.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Deploy lên Cloudflare

{% code overflow="wrap" collapsedlinecount="10" %}
```
npx wrangler deploy
```
{% endcode %}
{% endstep %}

{% step %}
### Hướng Dẫn Sử Dụng

1. **Quản trị User (Dành cho Admin)**
   1. Truy cập đường dẫn bí mật: `https://<ten-worker>.<tài khoản cloudflare của bạn>.workers.dev/admin`
   2. Nhập mã PIN (Đã cài trong phần ADMIN\_PIN)
   3. Thêm Username mới, thiết lập Mật khẩu, Dung lượng tối đa (Quota MB), Kích thước file tối đa (Max File MB).
   4.  Bấm Edit để cập nhật thông số người dùng hiện tại (bỏ trống trường password để giữ nguyên mật khẩu cũ) hoặc Delete để xóa người dùng cùng toàn bộ file R2 của người dùng đó.



       <figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 16.28.21.png" alt=""><figcaption></figcaption></figure>
2. **Cấu hình trên Ứng dụng VBook / Legado**
   1. Mở ứng dụng đọc truyện của bạn, vào phần **Đồng bộ & Sao lưu -> WebDAV**
   2. **URL / Địa chỉ:** `https://<ten-worker>.<tài khoản cloudflare của bạn>.workers.dev/` (Hoặc có thể thêm `/webdav` phía sau đều được hỗ trợ).
   3. **Tên đăng nhập (Username):** Username vừa tạo trong trang Admin.
   4. **Mật khẩu (Password):** Mật khẩu tương ứng vừa tạo trong trang Admin.
   5. **Thư mục gốc:&#x20;**<mark style="color:red;">**`vbook_backup`**</mark> (Khuyến nghị giữ nguyên để tạo thư mục đồng bộ riêng).
   6. Bấm **Kiểm tra** để xác thực kết nối (thấy chữ xanh báo thành công) và bấm **Lưu lại**!
{% endstep %}

{% step %}
### Giao diện Web Cá Nhân (Fake Cloud Drive)

* Mở trình duyệt truy cập thẳng: `https://<ten-worker>.<tài khoản cloudflare của bạn>.workers.dev/`
* Hệ thống sẽ hỏi thông tin đăng nhập **Basic Auth**.
* Nhập tài khoản người dùng WebDAV của bạn (đã tạo trong trang Admin).
* Bạn có thể xem trực quan danh sách file, kiểm tra dung lượng còn trống, tải file về máy hoặc xóa file cực kỳ thuận tiện.
* Có thể chia sẻ/dùng chung webdav bằng cách tạo new user.

<figure><img src="../../.gitbook/assets/Screenshot 2026-05-25 at 16.46.54.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}
### Lưu Ý Về Giới Hạn Vật Lý (Hạ Tầng Cloudflare)

Vì hệ thống vận hành trên kiến trúc Serverless miễn phí của Cloudflare, có một số giới hạn vật lý cần chú ý:

1. <mark style="color:$danger;">**Giới hạn dung lượng file tải lên tối đa là 100MB:**</mark> Cloudflare Workers giới hạn dung lượng request tối đa là **100MB**. Nếu bạn tải lên file đơn lẻ nặng hơn 100MB, Cloudflare Edge sẽ trả về lỗi <mark style="color:$danger;">`413 Request Entity Too Large`</mark> trước khi Worker kịp xử lý. Hãy thiết lập WebDAV client chia nhỏ file nếu bạn cần backup khối lượng dữ liệu khổng lồ.
2. **Đồng bộ KV (Eventual Consistency):** Workers KV có cơ chế đồng bộ phân tán toàn cầu với độ trễ từ 1-5 giây. Vì vậy, dung lượng lưu trữ trên trang Admin hoặc Web UI có thể mất vài giây để cập nhật chính xác số bytes sau khi bạn vừa tải một lượng lớn file lên.
3. **Bắt buộc sử dụng HTTPS:** Xác thực Basic Auth gửi mật khẩu dưới dạng chuỗi Base64. Luôn đảm bảo sử dụng đường dẫn `https://` (mặc định Cloudflare đã kích hoạt sẵn) để đảm bảo mật khẩu được truyền đi qua kênh mã hóa an toàn.
{% endstep %}
{% endstepper %}
