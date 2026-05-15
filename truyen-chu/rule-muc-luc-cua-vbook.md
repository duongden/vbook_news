---
description: Giới thiệu sơ về quy tắc chia mục lục khi nhập file vào vbook
---

# Rule mục lục của vbook

{% hint style="info" %}
#### <mark style="color:$danger;">**Chỉ dành cho bản beta**</mark>
{% endhint %}

<figure><img src="../.gitbook/assets/7.png" alt=""><figcaption></figcaption></figure>

### 1. 目录(去空白)

{% code overflow="wrap" %}
```
(?<=[　\s])
(?:序章|楔子|正文(?!完|结)|终章|后记|尾声|番外|
第\s{0,4}[数字]+?\s{0,4}(?:章|节|卷|集))
.{0,30}$
```
{% endcode %}

**Ý nghĩa:** Match tiêu đề chương nếu phía trước có khoảng trắng

**Ví dụ match**

{% code overflow="wrap" %}
```
　　第1章 开始
```
{% endcode %}

**Ví dụ&#x20;**<mark style="color:$warning;">**không**</mark>**&#x20;match**

{% code overflow="wrap" %}
```
第一节课 数学
```
{% endcode %}

### 2. 目录

{% code overflow="wrap" %}
```
^[ 　\t]{0,4}
(?:序章|楔子|正文|终章|后记|尾声|番外|
第xxx章)
.{0,30}$
```
{% endcode %}

**Ý nghĩa:** Rule tiêu chuẩn nhận diện mục lục chương

**Ví dụ match**

{% code overflow="wrap" %}
```
第1章 开始
第一章 重生
番外 婚后日常
序章
```
{% endcode %}

**Ví dụ&#x20;**<mark style="color:$warning;">**không**</mark>**&#x20;match**

{% code overflow="wrap" %}
```
今天是第一章内容
```
{% endcode %}

...
