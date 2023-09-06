import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ir-label',
})
export class IrLabel {
   @Prop() label: string;
    @Prop() value: string; 
  @Prop() iconShown = false;

    openEditSidebar() { 
        console.log('openEditSidebar');
    }


  render() {

    if (!this.value) {
      return null;
    }

    return (
      <div class={this.iconShown ? "sm-padding-right sm-padding-top" : "sm-padding-top"}>
        <strong class="sm-padding-right">{this.label}</strong>
        {this.value}
        {this.iconShown && <ir-icon icon="ft-edit primary-blue pointer" class="sm-padding-left" onClick={() => this.openEditSidebar()}></ir-icon>}
      </div>
    );
  }
}
