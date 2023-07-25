import useFormData from 'app/stores/form';
import React from 'react';

type Props = {};

const FormContentCode = (props: Props) => {
  const formState = useFormData();
  const { name, email, message } = formState;
  const date = new Date().toDateString();
  const lines = 15;
  return (
    <div className="flex items-start font-fira_retina text-menu-text">
      <div className="text-right text-[15px] lg:flex flex-col w-16 hidden">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="grid grid-cols-2 justify-end">
            <span className="col-span-1 mr-3">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="font-fira_retina w-full pl-0 break-words text-white text-container">
        <p className="leading-normal">
          <span className="text-[#C98BDF]">{'const '}</span>
          <span className="text-[#5565E8]">{'button '}</span>
          {'= '}
          <span className="text-[#5565E8]">
            {'document.querySelector'}
            <span className="text-menu-text">
              (<span className="text-codeline-link">{"'#sendBtn'"}</span>
              );
            </span>
          </span>
        </p>
        <br />
        <p className="text-menu-text">
          <span className="text-[#C98BDF]">{'const '}</span>
          <span className="text-[#5565E8]">{'message '}</span>
          {'= {'} <br />
          &nbsp;&nbsp;
          <span className="text-[#5565E8]">{'name '}</span>
          {': '}
          <span className="text-codeline-link">{'"'}</span>
          <span className="text-codeline-link">{name}</span>
          <span className="text-codeline-link">{'" '}</span>
          , <br /> &nbsp;&nbsp;
          <span className="text-[#5565E8]">{'email '}</span>
          {': '}
          <span className="text-codeline-link">{'"'}</span>
          <span className="text-codeline-link">{email}</span>
          <span className="text-codeline-link">{'" '}</span>
          , <br /> &nbsp;&nbsp;
          <span className="text-[#5565E8]">{'message '}</span>
          {': '}
          <span className="text-codeline-link">{'"'}</span>
          <span className="text-codeline-link">{message}</span>
          <span className="text-codeline-link">{'" '}</span>
          , <br /> &nbsp;&nbsp;
          {'date: '}
          <span className="text-codeline-link">{`"${date}"`}</span>
          <br /> {'};'}
        </p>
        <br />
        <p>
          <span className="text-[#5565E8]">
            {'button.addEventListener '}
            <span className="text-menu-text">
              (<span className="text-codeline-link">{"'click'"}</span>
              ), ()
              <span className="text-[#C98BDF]">{' => '}</span>
              {'{'}
              <br />
            </span>
            &nbsp;&nbsp;form.send
            <span className="text-menu-text">(</span>
            message
            <span className="text-menu-text">
              ); <br /> {'});'}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormContentCode;

{
  /* <template>
    <div className="code-container flex font-fira_retina text-menu-text">
          <br>
          <p>
              <span className="tag-name">
                  button.addEventListener
              
                  <span className="text-menu-text">
                      (
                          <span className="text-codeline-link">
                              'click'
                          </span>
                      ), () 
                      <span className="tag">
                          =>
                      </span>
                      {
                      <br>
                  </span>
                      &nbsp;&nbsp;form.send
                      <span className="text-menu-text">(</span>
                          message
                      <span className="text-menu-text">); <br> })</span>
                  </span>
              
          </p>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            date: new Date().toDateString(),
            lines: 0
        }
    },
    props: {
        name: String,
        email: String,
        message: String,
    },
    mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("input", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
    window.addEventListener("input", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      const fontSize = parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight);
    }
  }
}
</script>

<style>
.tag {
    color: #C98BDF;
}

.tag-name{
    color: #5565E8;
}

.arrow {
    color: #F8F8F8;
}

.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 0px;
  word-wrap: break-word;
}
</style> */
}
