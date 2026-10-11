---
description: >-
  Tạo danh mục OPDS từ thư mục Google Drive và thêm vào vBook để duyệt, tải
  sách.
---

# Đọc kho sách Google Drive qua OPDS

## OPDS là gì?

OPDS là chuẩn danh mục sách trực tuyến, giúp ứng dụng đọc sách duyệt thư viện và truy cập liên kết tải sách. Với cổng chuyển đổi vBook OPDS, bạn có thể duyệt thư mục sách trên Google Drive ngay trong vBook.

## Khi nào nên dùng?

* Bạn có một thư mục sách trên Google Drive và muốn duyệt, tải sách từ vBook.
* Bạn muốn truy cập cùng một kho sách trên nhiều thiết bị có ứng dụng hỗ trợ OPDS.
* Bạn muốn chia sẻ kho sách với bạn bè qua liên kết danh mục.

OPDS dùng để truy cập kho sách; không thay thế chức năng sao lưu và đồng bộ kệ sách, tiến trình đọc hoặc cài đặt của vBook.

## Chuẩn bị và quyền chia sẻ

* Một thư mục Google Drive chứa các tệp sách.
* Quyền truy cập thư mục được đặt thành **Bất kỳ ai có đường liên kết**, với vai trò **Người xem**.
* Kết nối mạng và ứng dụng vBook có mục OPDS.

## Cách thiết lập

{% stepper %}
{% step %}
### 1. Sao chép liên kết thư mục Google Drive

1. Mở Google Drive và chọn thư mục chứa sách.
2. Mở **Chia sẻ**.
3. Trong **Quyền truy cập chung**, chọn **Bất kỳ ai có đường liên kết** và vai trò **Người xem**.
4. Chọn **Sao chép đường liên kết**.

Sử dụng liên kết của thư mục chứa sách.
{% endstep %}

{% step %}
### 2. Tạo liên kết OPDS

1. Mở trang web [**opds.vbookext.me**](https://opds.vbookext.me) trên trình duyệt.
2. Dán liên kết thư mục Google Drive vào ô nhập.
3. Mở **Tùy chọn bảo mật & API Key** nếu muốn đặt tên đăng nhập và mật khẩu cho danh mục.
4. Chọn **Tạo đường dẫn OPDS**, sau đó sao chép liên kết được tạo.
{% endstep %}

{% step %}
### 3. Thêm danh mục vào vBook

1. Mở mục **Kho lưu trữ (Cloud)** và chọn **OPDS**.
2. Dán liên kết đã tạo vào ô **URL danh mục**.
3. Nhập tên đăng nhập và mật khẩu nếu đã thiết lập ở bước 2.
4. Chọn **Lưu**, sau đó mở danh mục để kiểm tra thư mục và sách.
{% endstep %}

{% step %}
### 4. Duyệt và tải sách

Mở thư mục hoặc chọn sách trong danh mục OPDS, rồi dùng tùy chọn tải hoặc mở mà vBook hiển thị. Khả năng đọc tệp phụ thuộc vào định dạng được phiên bản vBook của bạn hỗ trợ.
{% endstep %}
{% endstepper %}

## Video hướng dẫn

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FwIrVteEIDLZ8Ul4z69Rr%2Fuploads%2FMDqUy1ri5c1LnkB2lTus%2Fvbook-opds-hdsd.mp4?alt=media&token=9e1ae775-c02f-495e-aa65-42e6770d5436" %}

## Xử lý lỗi thường gặp

| Hiện tượng                              | Cách kiểm tra                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Không tìm thấy thư mục hoặc báo lỗi 404 | Kiểm tra liên kết thư mục, quyền chia sẻ trên Drive và việc thư mục còn tồn tại. Tạo lại liên kết OPDS nếu cần. |
| Yêu cầu xác thực hoặc báo lỗi 401       | Nhập lại tên đăng nhập và mật khẩu đã đặt khi tạo liên kết OPDS.                                                |
| Không thấy sách                         | Kiểm tra đúng thư mục, quyền truy cập của tệp và định dạng mà cổng OPDS hỗ trợ.                                 |
| Thấy sách nhưng không mở được           | Kiểm tra định dạng được vBook hỗ trợ và thử tải tệp gốc để xác định tệp có bị lỗi hay không.                    |

## Chia sẻ danh mục

* Đặt tên đăng nhập và mật khẩu nếu cần hạn chế truy cập qua cổng OPDS.
* Chỉ gửi liên kết và thông tin đăng nhập cho người bạn muốn chia sẻ.
* Hạn chế phát tán liên kết thư mục Drive gốc. Thư mục vẫn có quyền **Bất kỳ ai có đường liên kết** như đã thiết lập.

## Tài liệu dành cho nhà phát triển

Mã nguồn và hướng dẫn tự triển khai: [kychitoge/vbook-opds](https://github.com/kychitoge/vbook-opds).
