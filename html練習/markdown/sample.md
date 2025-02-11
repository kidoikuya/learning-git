参考URL
https://shk-education-markdown.netlify.app/extensions
バックコート「`」＝ shift+@

# これは大見出しです
## これは中見出しです
### これは小見出しです
#### これは小見出しです

これは文章の段落を表します。

- これは箇条書きリストです。
- これは箇条書きリストです。

1. これは順序付きリストです。
1. これは順序付きリストです。

[湘南ハイテク企画のWebサイトはこちらから](https://www.sh-k.com/)

# test

> これは引用文です。

> これは引用文です。
> 複数行に分けて書くことができます。
> > また、ネストして書くことで、
> >  多重引用も可能です。

---		// ハイフン
***		// アスタリスク
___		// アンダースコア
- - -	// 半角スペースが間にあってもOK


`print("Hello world!")`はコードの一部として表示されます。


normal *italic* normal
normal _italic_ normal

normal **bold** normal
normal __bold__ normal

[Example Domain](http://example.com "ドメインのサンプル")


~~~
class Sample(){
    private String name;
        Sample(String name){
            this.name = name
        }
        public int getSum(int a, int b){
            return a+b;
        }
}
~~~

> ![うさぎとかめのイラスト](https://1.bp.blogspot.com/-Pzx78vJ6dEM/UTneqdtwQTI/AAAAAAAAOqU/mImGr4pjQjw/s1600/usagitokame.png "うさぎとかめ")
> 引用元：[いらすとや](https://www.irasutoya.com/)


~~これは過去の情報です。~~
最新の情報はこちらです。

| 見出し1 | 見出し2 | 見出し3 |
| :--- | ---: | :---: |
| `:---` の列は左寄せ | `--:` の列は右寄せ | `:--:` の列は中央配置 |

| 見出し |
| --- |
| コロン（ `:` ） を省略した場合、見出しは中央配置でセルは左寄せが適用される |
| `<br />` タグを入れると、<br />表内でテキストを折り返すことができる |

- [ ] 未完了のタスク
- [x] 完了済みのタスク

~~~java
class Sample(){
    private String name;
        Sample(String name){
            this.name = name
        }
        public int getSum(int a, int b){
            return a+b;
        }
}
~~~

$$
e^{i\theta} = \cos{\theta} + i \sin{\theta}
$$

$$
\frac{1}{2} - \frac{1}{3} = \frac{1}{6} \frac{a+b}{2ab}
$$

~~~mermaid
flowchart TD;
    A[task 1]-->B[task 2] & C[task 3] & D[task 4];
    B-->D;
    C-->D;
~~~

~~~mermaid
pie showData
    title ボランティアが引き取ったペットたち
    "犬" : 600
    "猫" : 85
    "ハムスター" : 15
~~~
















